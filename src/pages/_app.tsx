import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="mx-auto max-w-4xl p-4">
        <Header />
        <Component {...pageProps} />
        <div className="divider" />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
