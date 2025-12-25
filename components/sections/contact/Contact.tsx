'use client';

import { MotionDiv } from '@/components/ui/motion';

export default function Contact() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Contact</h2>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-neutral-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-neutral-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-2 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-neutral-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-2 rounded bg-neutral-700 hover:bg-neutral-600"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </MotionDiv>
  );
}
