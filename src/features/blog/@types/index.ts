import type { MdBlock } from 'notion-to-md/build/types';

export interface BlogPost {
  authors: string[];
  content?: string | MdBlock[];
  cover: string | null;
  created: string;
  description: string;
  published: boolean;
  slug: string;
  tags: string[];
  title: string;
  updated: string;
}

export interface NotionBlogDto {
  archived: boolean;
  cover: Cover;
  created_by: CreatedBy;
  created_time: string;
  icon: Icon;
  id: string;
  last_edited_by: LastEditedBy;
  last_edited_time: string;
  object: string;
  parent: Parent;
  properties: Properties;
  url: string;
}

export interface CreatedBy {
  id: string;
  object: string;
}

export interface LastEditedBy {
  id: string;
  object: string;
}

export interface Cover {
  external?: External;
  file?: File;
  type: 'file' | 'external';
}

export interface External {
  url: string;
}

export interface File {
  expiry_time: string;
  url: string;
}

export interface Icon {
  emoji: string;
  type: string;
}

export interface Parent {
  database_id: string;
  type: string;
}

export interface Properties {
  author: Author;
  created: Created;
  published: Published;
  slug: Slug;
  summary: Description;
  tags: Tags;
  title: Title;
  updated: Updated;
}

export interface Created {
  created_time: string;
  id: string;
  type: string;
}

export interface Slug {
  formula: Formula;
  id: string;
  type: string;
}

export interface Formula {
  string: string;
  type: string;
}

export interface Description {
  id: string;
  rich_text: RichText[];
  type: string;
}

export interface RichText {
  annotations: Annotations;
  href: any;
  plain_text: string;
  text: Text;
  type: string;
}

export interface Text {
  content: string;
  link: any;
}

export interface Annotations {
  bold: boolean;
  code: boolean;
  color: string;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
}

export interface Updated {
  id: string;
  last_edited_time: string;
  type: string;
}

export interface Author {
  id: string;
  people: People[];
  type: string;
}

export interface People {
  id: string;
  object: string;
}

export interface Tags {
  id: string;
  multi_select: MultiSelect[];
  type: string;
}

export interface MultiSelect {
  color: string;
  id: string;
  name: string;
}

export interface Published {
  checkbox: boolean;
  id: string;
  type: string;
}

export interface Title {
  id: string;
  title: Title2[];
  type: string;
}

export interface Title2 {
  annotations: Annotations2;
  href: any;
  plain_text: string;
  text: Text2;
  type: string;
}

export interface Text2 {
  content: string;
  link: any;
}

export interface Annotations2 {
  bold: boolean;
  code: boolean;
  color: string;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
}
