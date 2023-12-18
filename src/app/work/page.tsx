import { n2m, notionClient } from '@/components/Notion/client';
import type { Experience } from '@/components/Sections/WorkSection';
import WorkSection from '@/components/Sections/WorkSection';
import type {
  PageObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import Head from 'next/head';

type NotionExperienceResponse = PageObjectResponse & {
  description: string;
  properties: {
    Company: {
      title: Array<RichTextItemResponse>;
    };
    Date: {
      rich_text: Array<RichTextItemResponse>;
    };
    Link: {
      rich_text: Array<RichTextItemResponse>;
    };
    Place: {
      rich_text: Array<RichTextItemResponse>;
    };
    Title: {
      rich_text: Array<RichTextItemResponse>;
    };
  };
};

const getAllExperiences = async () => {
  const experiences = await notionClient.databases.query({
    database_id: process.env.WORK_DATABASE_ID as string,
    sorts: [
      {
        property: 'Order',
        direction: 'descending',
      },
    ],
  });

  const allExperiences = experiences.results as NotionExperienceResponse[];
  for (const experience of allExperiences) {
    // convert to markdown
    const mdblocks = await n2m.pageToMarkdown(experience.id);
    const mdStringObject = n2m.toMarkdownString(mdblocks);
    experience.description = mdStringObject.parent;
  }

  return allExperiences.map((experience) => ({
    id: experience.id,
    company: experience.properties.Company.title[0].plain_text,
    place: experience.properties.Place.rich_text[0].plain_text,
    title: experience.properties.Title.rich_text[0].plain_text,
    date: experience.properties.Date.rich_text[0].plain_text,
    link: experience.properties.Link.rich_text[0].plain_text,
    description: experience.description,
  }));
};

const getStaticProps = async () => {
  const data = (await getAllExperiences()) as Experience[];

  return {
    experiences: data,
  };
};

export default async function WorkPage() {
  const { experiences } = await getStaticProps();
  return (
    <>
      <Head>
        <title>Work | Seyed Alireza Fatemi Jahromi</title>
        <meta
          name="description"
          content="Seyed Alireza Fatemi Jahromi Personal Website"
        />
      </Head>
      <main>
        <WorkSection experiences={experiences} />
      </main>
    </>
  );
}
