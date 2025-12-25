import Image from 'next/image';
import { Bento } from '@/components/ui/bento';

const items = [
  {
    id: 'about-me',
    className: 'col-span-12 lg:col-span-4',
    content: (
      <>
        <Image
          src="/file.svg"
          width={48}
          height={48}
          alt="About Me"
          className="mb-4"
        />
        <h3 className="text-xl font-semibold text-neutral-300">About Me</h3>
        <p className="max-w-lg text-neutral-400">
          A brief introduction to my skills and interests.
        </p>
      </>
    ),
    deepDiveContent: (
      <div>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>This is the deep dive view for the About Me section.</p>
      </div>
    ),
  },
  {
    id: 'experience',
    className: 'col-span-12 lg:col-span-8',
    content: (
      <>
        <Image
          src="/globe.svg"
          width={48}
          height={48}
          alt="Experience"
          className="mb-4"
        />
        <h3 className="text-xl font-semibold text-neutral-300">Experience</h3>
        <p className="max-w-lg text-neutral-400">
          A timeline of my work experience.
        </p>
      </>
    ),
    deepDiveContent: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <p>This is the deep dive view for the Experience section.</p>
      </div>
    ),
  },
];

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Mohammed Vepari
        </h1>
        <Bento items={items} />
      </div>
    </section>
  );
}