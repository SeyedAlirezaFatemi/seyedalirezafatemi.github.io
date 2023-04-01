import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="p-20">
        <Header />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
