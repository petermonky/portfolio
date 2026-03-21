import ProjectCard from "@/components/cards/ProjectCard";
import SectionShell from "@/components/common/SectionShell";
import { projectItems } from "@/data/site";

export default function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      ariaLabel="Selected projects"
      heading="Projects"
    >
      <ol className="group/list">
        {projectItems.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </ol>
      {/* TODO: */}
      {/* <div className="mt-12">
        <a
          className="group text-secondary hover:text-primary inline-flex items-baseline text-base leading-tight font-semibold"
          aria-label="View Projects"
          href="/archive"
        >
          <span>
            <span className="pb-px transition motion-reduce:transition-none">
              View Projects
            </span>
            <span className="whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="group-hover:text-primary ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </a>
      </div> */}
    </SectionShell>
  );
}
