import ExperienceCard from "@/components/cards/ExperienceCard";
import ArrowIcon from "@/components/common/ArrowIcon";
import SectionShell from "@/components/common/SectionShell";
import { experienceItems } from "@/data/site";

export default function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      ariaLabel="Work experience"
      heading="Experience"
    >
      <ol className="group/list">
        {experienceItems.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </ol>
      <div className="mt-12">
        <a
          className="group/link text-secondary hover:text-primary inline-flex items-baseline text-base leading-tight font-semibold"
          href="/documents/resume_latest.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Résumé (opens in a new tab)"
        >
          <span>
            View Résumé
            <span className="inline-block">
              <ArrowIcon
                className="group-hover/link:text-primary ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </span>
          </span>
        </a>
      </div>
    </SectionShell>
  );
}
