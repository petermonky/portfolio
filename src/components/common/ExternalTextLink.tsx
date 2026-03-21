import type { ReactNode } from "react";

type ExternalTextLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
};

export default function ExternalTextLink({
  href,
  label,
  children,
  className = "font-medium text-secondary hover:text-primary transition-all",
}: ExternalTextLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${label} (opens in a new tab)`}
    >
      {children}
    </a>
  );
}
