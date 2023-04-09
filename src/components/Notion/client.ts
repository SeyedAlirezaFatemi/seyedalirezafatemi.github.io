import { NotionToMarkdown } from 'notion-to-md';
import { Client } from '@notionhq/client';

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const n2m = new NotionToMarkdown({ notionClient });
