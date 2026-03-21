import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  ariaLabel: string;
  heading: string;
  children: ReactNode;
};

export default function SectionShell({
  id,
  ariaLabel,
  heading,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={ariaLabel}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase lg:sr-only">
          {heading}
        </h2>
      </div>
      <div>{children}</div>
    </section>
  );
}
