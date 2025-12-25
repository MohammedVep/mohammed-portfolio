'use client';

import Image from 'next/image';
import { Bento } from '@/components/ui/bento';

const items = [
  {
    id: 'project-1',
    className: 'col-span-12 lg:col-span-4',
    content: (
      <>
        <Image
          src="/file.svg"
          width={48}
          height={48}
          alt="Project 1"
          className="mb-4"
        />
        <h3 className="text-xl font-semibold text-neutral-300">Project 1</h3>
        <p className="max-w-lg text-neutral-400">
          A brief description of project 1.
        </p>
      </>
    ),
    deepDiveContent: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Project 1</h2>
        <p>This is the deep dive view for Project 1.</p>
      </div>
    ),
  },
  {
    id: 'project-2',
    className: 'col-span-12 lg:col-span-8',
    content: (
      <>
        <Image
          src="/globe.svg"
          width={48}
          height={48}
          alt="Project 2"
          className="mb-4"
        />
        <h3 className="text-xl font-semibold text-neutral-300">Project 2</h3>
        <p className="max-w-lg text-neutral-400">
          A brief description of project 2.
        </p>
      </>
    ),
    deepDiveContent: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Project 2</h2>
        <p>This is the deep dive view for Project 2.</p>
      </div>
    ),
  },
  {
    id: 'project-3',
    className: 'col-span-12 lg:col-span-8',
    content: (
      <>
        <Image
          src="/file.svg"
          width={48}
          height={48}
          alt="Project 3"
          className="mb-4"
        />
        <h3 className="text-xl font-semibold text-neutral-300">Project 3</h3>
        <p className="max-w-lg text-neutral-400">
          A brief description of project 3.
        </p>
      </>
    ),
    deepDiveContent: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Project 3</h2>
        <p>This is the deep dive view for Project 3.</p>
      </div>
    ),
  },
  {
    id: 'project-4',
    className: 'col-span-12 lg:col-span-4',
    content: (
      <>
        <Image
          src="/globe.svg"
          width={48}
          height={48}
          alt="Project 4"
          className="mb-4"
        />
        <h3 className="text-xl font-semibold text-neutral-300">Project 4</h3>
        <p className="max-w-lg text-neutral-400">
          A brief description of project 4.
        </p>
      </>
    ),
    deepDiveContent: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Project 4</h2>
        <p>This is the deep dive view for Project 4.</p>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <Bento items={items} />
      </div>
    </section>
  );
}