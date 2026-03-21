import SectionShell from "@/components/common/SectionShell";
import { aboutParagraphs, TextSegment } from "@/data/site";
import Link from "next/link";

export default function AboutSection() {
  function renderSegment(segment: TextSegment, key: React.Key) {
    if (segment.type === "text") {
      return <span key={key}>{segment.content}</span>;
    }

    const isInternal = segment.href.startsWith("/");

    if (isInternal) {
      return (
        <Link className="text-tertiary" key={key} href={segment.href}>
          {segment.content}
        </Link>
      );
    }

    return (
      <a
        className="text-primary border-b border-transparent transition-all duration-100 hover:border-black"
        key={key}
        href={segment.href}
        target="_blank"
        rel="noreferrer"
      >
        {segment.content}
      </a>
    );
  }

  return (
    <SectionShell id="about" ariaLabel="About me" heading="About">
      {aboutParagraphs.map((paragraph, index) => (
        <p key={index} className="text-secondary mb-4">
          {paragraph.map((segment, subIndex) =>
            renderSegment(segment, subIndex),
          )}
        </p>
      ))}
    </SectionShell>
  );
}
