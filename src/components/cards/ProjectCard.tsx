import Image from "next/image";
import type { ProjectItem } from "@/data/site";
import LinkWithIcon from "@/components/common/LinkWithIcon";

type ProjectCardProps = {
  item: ProjectItem;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:-translate-y-0.5 lg:group-hover:shadow-[10px_10px_40px_#e2e2e2,-10px_-10px_40px_#fefefe] lg:group-hover:backdrop-blur" />
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <LinkWithIcon
              href={item.href}
              label={item.title}
              className="group/link text-primary inline-flex items-baseline text-base leading-tight font-medium"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span className="inline-block">{item.title}</span>
            </LinkWithIcon>
          </h3>
          <p className="text-secondary mt-2 text-sm leading-normal">
            {item.description}
          </p>
        </div>
        <Image
          src={item.imageDirectory}
          alt={item.imageAlt}
          width={200}
          height={48}
          className="aspect-video rounded border-2 border-slate-300/30 object-cover transition group-hover:border-slate-600/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          priority={false}
        />
      </div>
    </li>
  );
}
