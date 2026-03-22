import ProjectCard from "@/components/cards/ProjectCard";
import ArrowIcon from "@/components/common/ArrowIcon";
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
        {projectItems.map(
          (item) =>
            item.isHighlight && <ProjectCard key={item.id} item={item} />,
        )}
      </ol>
      <div className="mt-12">
        <a
          className="group/link text-secondary hover:text-primary inline-flex items-baseline text-base leading-tight font-semibold"
          href="/projects"
          aria-label="View all projects"
        >
          <span>
            View All Projects
            <span className="inline-block">
              <ArrowIcon
                direction="right"
                className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </span>
          </span>
        </a>
      </div>
    </SectionShell>
  );
}
