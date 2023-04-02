import Head from "next/head";
import { Inter } from "next/font/google";
import { useTheme } from "next-themes";
import { HomeSection } from "@/components/Sections/HomeSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { theme, setTheme } = useTheme();

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
