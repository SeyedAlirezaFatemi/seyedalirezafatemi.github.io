import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="p-16">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
