import type { ReactNode } from "react";

type SocialLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
};

export default function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <li className="mr-5 shrink-0 text-xs">
      <a
        className="text-secondary hover:text-primary block transition-all"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${label} (opens in a new tab)`}
        title={label}
      >
        <span className="sr-only">{label}</span>
        {icon}
      </a>
    </li>
  );
}
