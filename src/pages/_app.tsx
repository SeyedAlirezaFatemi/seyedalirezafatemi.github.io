import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="p-20">
        <Header />
        <Component {...pageProps} />
        <div className="divider"></div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
