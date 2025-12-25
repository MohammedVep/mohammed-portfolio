import { ReactNode } from 'react';
import Image from 'next/image';

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`grid w-full auto-rows-[22rem] grid-cols-3 gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  name?: string;
  background?: ReactNode;
  Icon?: any;
  description?: string;
  href?: string;
}) => {
  return (
    <div
      key={props.name}
      className={`group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl ${className}`}
    >
      <div>{props.background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        {props.Icon &&
          (typeof props.Icon === 'string' ? (
            <Image
              src={props.Icon}
              width={48}
              height={48}
              alt={props.name || ''}
              className="h-12 w-12 origin-left transform-gpu text-neutral-700 -translate-y-12 transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:text-white"
            />
          ) : (
            <props.Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 -translate-y-12 transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:text-white" />
          ))}
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {props.name}
        </h3>
        <p className="max-w-lg text-neutral-400">{props.description}</p>
      </div>

      <div
        className={
          'pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
        }
      >
        {/* <Button variant="ghost" asChild size="sm">
          <a href={props.href}>
            {props.cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button> */}
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
  );
};

export { BentoCard, BentoGrid };

