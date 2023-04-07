import Image from 'next/image';

export default function PageNotFound() {
  return (
    <div className="text-center">
      <Image
        className="inline-block"
        src="/404.png"
        alt="404"
        width={500}
        height={500}
      />
      <h1>404 - Page Not Found</h1>
      <p>Oops! It seems like you&sbquo;ve ventured into uncharted territory.</p>
    </div>
  );
}
