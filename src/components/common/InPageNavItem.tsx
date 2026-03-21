type InPageNavItemProps = {
  id: string;
  label: string;
  active?: boolean;
};

export default function InPageNavItem({
  id,
  label,
  active,
}: InPageNavItemProps) {
  const indicatorBase =
    "nav-indicator -mt-px w-0 text-xs font-bold transition-all motion-reduce:transition-none ";
  const highlightClass = active
    ? "text-primary w-3 opacity-100"
    : "text-tertiary opacity-0";
  const textClass = `nav-text text-xs font-bold tracking-widest uppercase transition-colors duration-200 group-hover:text-secondary group-focus-visible:text-secondary ${
    active ? "text-primary!" : "text-tertiary"
  }`;

  return (
    <a
      className="group flex items-center py-3"
      href={`#${id}`}
      aria-current={active ? "true" : undefined}
    >
      <span className={`${indicatorBase} text-left ${highlightClass}`}>[</span>
      <span className={textClass}>{label}</span>
      <span className={`${indicatorBase} text-right ${highlightClass}`}>]</span>
    </a>
  );
}
