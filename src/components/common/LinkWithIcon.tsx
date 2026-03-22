import type { ReactNode } from "react";
import ArrowIcon from "./ArrowIcon";

type LinkWithIconProps = {
  href: string;
  label: string;
  children: ReactNode;
  iconDirection?: "up-right" | "right" | "left";
  newTab?: boolean;
  className?: string;
  iconClassName?: string;
};

const defaultClassName =
  "inline-flex items-baseline font-medium leading-tight text-primary group/link text-base";

export default function LinkWithIcon({
  href,
  label,
  children,
  iconDirection = "up-right",
  newTab = true,
  className = defaultClassName,
  iconClassName = "translate-y-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-0 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-0 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1",
}: LinkWithIconProps) {
  return (
    <a
      className={className}
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer noopener" : undefined}
      aria-label={`${label}${newTab ? " (opens in a new tab)" : ""}`}
    >
      <span>{children}</span>
      <ArrowIcon
        direction={iconDirection}
        className={iconClassName}
        aria-hidden="true"
      />
    </a>
  );
}
