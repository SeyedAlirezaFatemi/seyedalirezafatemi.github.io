import { NotionToMarkdown } from 'notion-to-md';
import { Client } from '@notionhq/client';

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient });

n2m.setCustomTransformer('video', async (block) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { video } = block as any;
  const { type } = video;
  const video_url = video[type].url;
  return `<iframe class="w-full h-96" src="${video_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
});

// Notion SDK v5 / API 2025-09-03: databases.query() is replaced by dataSources.query().
// Retrieve the data_source_id from the database, then query the data source.
const dataSourceIdCache = new Map<string, string>();

async function getDataSourceId(databaseId: string): Promise<string> {
  const cached = dataSourceIdCache.get(databaseId);
  if (cached) return cached;

  const db = await notionClient.databases.retrieve({
    database_id: databaseId,
  });
  if (!('data_sources' in db) || !db.data_sources.length) {
    throw new Error(`No data sources found for database ${databaseId}`);
  }
  const id = db.data_sources[0].id;
  dataSourceIdCache.set(databaseId, id);
  return id;
}

export async function queryDatabase(
  databaseId: string,
  body: Record<string, unknown> = {}
) {
  const dataSourceId = await getDataSourceId(databaseId);
  return notionClient.dataSources.query({
    data_source_id: dataSourceId,
    ...body,
  });
}

export { n2m };
