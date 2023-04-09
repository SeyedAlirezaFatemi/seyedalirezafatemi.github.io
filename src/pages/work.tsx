import { n2m, notionClient } from '@/components/Notion/client';
import type { Experience } from '@/components/Sections/WorkSection';
import WorkSection from '@/components/Sections/WorkSection';
import Head from 'next/head';

export default function Work({ experiences }: { experiences: Experience[] }) {
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

  const allExperiences = experiences.results;
  for (const experience of allExperiences) {
    const mdblocks = await n2m.pageToMarkdown(experience.id);
    const mdString = n2m.toMarkdownString(mdblocks);
    experience.description = mdString;
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

export const getStaticProps = async () => {
  const data = await getAllExperiences();

  return {
    props: {
      experiences: data,
    },
    revalidate: 60,
  };
};
