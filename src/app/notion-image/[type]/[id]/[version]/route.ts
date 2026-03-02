import { notionClient } from '@/components/Notion/client';
import type { NextRequest } from 'next/server';

export const runtime = 'nodejs';

// Only proxy Notion-hosted S3 signed URLs to prevent open-proxy abuse
const ALLOWED_HOST_PATTERN =
  /\.amazonaws\.com$|^secure\.notion-static\.com$|^notion-static\.com$/;

function isValidNotionId(id: string) {
  return /^[0-9a-fA-F-]{32,36}$/.test(id);
}

async function getImageUrl(type: string, id: string): Promise<string | null> {
  if (type === 'block') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const block = (await notionClient.blocks.retrieve({ block_id: id })) as any;
    if (block.type !== 'image') return null;
    const img = block.image;
    return img.type === 'file'
      ? (img.file?.url ?? null)
      : (img.external?.url ?? null);
  } else if (type === 'page') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const page = (await notionClient.pages.retrieve({ page_id: id })) as any;
    if (!page.cover) return null;
    return page.cover.type === 'file'
      ? (page.cover.file?.url ?? null)
      : (page.cover.external?.url ?? null);
  }
  return null;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ type: string; id: string; version: string }> }
) {
  const { type, id } = await params;

  if (!['block', 'page'].includes(type)) {
    return new Response('Invalid type', { status: 400 });
  }

  if (!isValidNotionId(id)) {
    return new Response('Invalid id', { status: 400 });
  }

  let signedUrl: string | null;
  try {
    signedUrl = await getImageUrl(type, id);
  } catch (e) {
    console.error('[notion-image] Notion API error:', e);
    return new Response('Not found', { status: 404 });
  }

  if (!signedUrl) {
    console.error('[notion-image] No image URL for', type, id);
    return new Response('No image URL', { status: 404 });
  }

  const host = new URL(signedUrl).host;
  if (!ALLOWED_HOST_PATTERN.test(host)) {
    console.error('[notion-image] Host not in allowlist:', host);
    return new Response('Host not allowed', { status: 403 });
  }

  const upstream = await fetch(signedUrl, {
    headers: { 'User-Agent': 'notion-image-proxy' },
  });

  if (!upstream.ok) {
    console.error(
      '[notion-image] Upstream fetch failed:',
      upstream.status,
      upstream.statusText
    );
    return new Response('Upstream fetch failed', { status: 502 });
  }

  const contentType =
    upstream.headers.get('content-type') ?? 'application/octet-stream';

  return new Response(upstream.body, {
    status: 200,
    headers: {
      'Content-Type': contentType,
      // URL is versioned (last_edited_time), so cache forever at the CDN
      'Cache-Control': 'public, s-maxage=31536000, immutable',
    },
  });
}
