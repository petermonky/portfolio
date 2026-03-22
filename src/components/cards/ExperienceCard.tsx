import type { ExperienceItem } from "@/data/site";
import LinkWithIcon from "@/components/common/LinkWithIcon";
import TagPill from "@/components/common/TagPill";

type ExperienceCardProps = {
  item: ExperienceItem;
};

export default function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:-translate-y-0.5 lg:group-hover:shadow-[10px_10px_40px_#e2e2e2,-10px_-10px_40px_#fefefe] lg:group-hover:backdrop-blur" />
        <header className="text-tertiary z-10 mt-1 mb-2 flex flex-col text-xs font-semibold tracking-wide uppercase sm:col-span-2">
          <div className="hidden flex-col sm:flex">
            {item.periods.map((period) => (
              <span key={period.replace("-", "to")}>{period}</span>
            ))}
          </div>
          <div className="sm:hidden">{item.periods.join(" · ")}</div>
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="text-primary leading-snug font-medium">
            <LinkWithIcon
              href={item.companyUrl}
              label={`${item.role} at ${item.company}`}
              className="group/link text-primary inline-flex items-baseline text-base leading-tight font-medium"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              {item.role} · <span className="inline-block">{item.company}</span>
            </LinkWithIcon>
          </h3>
          <p className="text-secondary mt-2 text-sm leading-normal">
            {item.description}
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {item.technologies.map((tech) => (
              <li key={tech} className="mt-2 mr-1.5">
                <TagPill text={tech} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
