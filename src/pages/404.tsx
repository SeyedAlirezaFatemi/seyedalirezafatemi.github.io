import NotFound from '@/assets/404.png';
import Image from 'next/image';

export default function PageNotFound() {
  return (
    <div className="text-center">
      <Image className="inline-block" src={NotFound} alt="404" />
      <h1>404 - Page Not Found</h1>
      <p>Oops! It seems like you&apos;ve ventured into uncharted territory.</p>
    </div>
  );
}
