import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
