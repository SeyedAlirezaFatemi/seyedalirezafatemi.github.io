import HonorsSection from '@/components/Sections/HonorsSection';
import Head from 'next/head';

export default function Honors() {
  return (
    <>
      <Head>
        <title>Honors | Seyed Alireza Fatemi Jahromi</title>
        <meta
          name="description"
          content="Seyed Alireza Fatemi Jahromi Personal Website"
        />
      </Head>
      <main>
        <HonorsSection />
      </main>
    </>
  );
}
