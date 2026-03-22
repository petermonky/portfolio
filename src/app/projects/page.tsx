import type { Metadata } from "next";
import Link from "next/link";
import ArrowIcon from "@/components/common/ArrowIcon";
import LinkWithIcon from "@/components/common/LinkWithIcon";
import { projectItems } from "@/data/site";
import TagPill from "@/components/common/TagPill";

export const metadata: Metadata = {
  title: "Projects | Peter Jung",
  description: "An index of projects by Peter Jung.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:py-24">
        <Link
          href="/"
          className="group text-secondary mb-2 inline-flex items-center leading-tight font-semibold"
        >
          <ArrowIcon
            direction="left"
            className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          />
          Peter Jung
        </Link>

        <h1 className="text-primary text-4xl font-bold tracking-tight sm:text-5xl">
          All Projects
        </h1>

        <table className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b px-6 py-5 backdrop-blur">
            <tr className="border-primary/10 border-b text-sm">
              <th className="text-secondary py-4 pr-6 font-semibold">Year</th>
              <th className="text-secondary py-4 pr-6 font-semibold">
                Project
              </th>
              <th className="text-secondary py-4 pr-6 font-semibold">
                Categories
              </th>
              <th className="text-secondary hidden py-4 pr-6 text-sm font-semibold lg:table-cell">
                Built with
              </th>
              <th className="text-secondary hidden py-4 pr-6 text-sm font-semibold sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {projectItems.map((item) => (
              <tr
                key={item.id}
                className="border-primary/10 border-b align-top last:border-b-0"
              >
                <td className="text-secondary translate-y-px py-4 pr-6 align-top text-sm">
                  {item.year}
                </td>
                <td className="text-primary py-4 pr-6 align-top leading-snug font-semibold">
                  {item.href ? (
                    <div className="block sm:hidden">
                      <LinkWithIcon
                        href={item.href}
                        label={item.title}
                        className="group/link hover:text-secondary inline-flex items-baseline justify-end text-base leading-tight font-medium sm:hidden"
                        iconClassName="ml-1 inline-block h-4 w-4 shrink-0 translate-y-1 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-0 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-0 motion-reduce:transition-none"
                      >
                        {item.title}
                      </LinkWithIcon>
                    </div>
                  ) : (
                    <div className="inline-flex items-baseline justify-end text-base leading-tight font-medium sm:hidden">
                      {item.title}
                    </div>
                  )}
                  <div className="hidden sm:block">{item.title}</div>
                </td>
                <td className="text-secondary translate-y-px py-4 pr-6 align-top text-sm">
                  {item.categories.join(", ")}
                </td>
                <td className="hidden py-3 pr-6 align-top lg:table-cell">
                  <ul className="flex flex-wrap" aria-label="Technologies used">
                    {item.technologies.map((tech) => (
                      <li key={tech} className="my-1 mr-1.5">
                        <TagPill text={tech} />
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="hidden py-4 align-top text-sm sm:table-cell">
                  {item.href && (
                    <LinkWithIcon
                      href={item.href}
                      label={item.title}
                      className="group/link text-primary hover:text-secondary items-baseline justify-end text-sm leading-tight font-medium"
                      iconClassName="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                    >
                      {item.label}
                    </LinkWithIcon>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
