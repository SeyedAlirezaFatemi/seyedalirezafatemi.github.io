import { HomeSection } from '@/components/Sections/HomeSection';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seyed Alireza Fatemi Jahromi</title>
        <meta
          name="description"
          content="Seyed Alireza Fatemi Jahromi Personal Website"
        />
      </Head>
      <main>
        <HomeSection />
      </main>
    </>
  );
}
