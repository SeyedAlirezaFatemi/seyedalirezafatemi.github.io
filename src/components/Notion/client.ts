import { NotionToMarkdown } from 'notion-to-md';
import { Client } from '@notionhq/client';

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient });

n2m.setCustomTransformer('video', async (block) => {
  const { video } = block as any;
  const { type } = video;
  const video_url = video[type].url;
  return `<video class="w-full" src="${video_url}" controls> Your browser does not support the video tag. </video>`;
});

export { n2m };
