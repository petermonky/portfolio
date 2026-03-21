"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import InPageNavItem from "@/components/common/InPageNavItem";
import SocialLink from "@/components/common/SocialLink";
import {
  CodePenIcon,
  GitHubIcon,
  GoodreadsIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons";
import type { SocialIconName } from "@/data/site";
import { navLinks, socialLinks } from "@/data/site";

function getSocialIcon(icon: SocialIconName) {
  const iconClassName = "h-6 w-6";

  switch (icon) {
    case "github":
      return <GitHubIcon className={iconClassName} aria-hidden="true" />;
    case "linkedin":
      return <LinkedInIcon className={iconClassName} aria-hidden="true" />;
    case "codepen":
      return <CodePenIcon className={iconClassName} aria-hidden="true" />;
    case "instagram":
      return <InstagramIcon className={iconClassName} aria-hidden="true" />;
    case "goodreads":
      return <GoodreadsIcon className={iconClassName} aria-hidden="true" />;
    default:
      return null;
  }
}

export default function Header() {
  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const [activeSection, setActiveSection] = useState(navLinks[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof IntersectionObserver === "undefined") return;

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const visible = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry);
          else visible.delete(entry.target.id);
        }

        if (!visible.size) return;

        // pick the visible section closest to the top of the viewport
        const best = Array.from(visible.values()).reduce((a, b) =>
          a.boundingClientRect.top <= b.boundingClientRect.top ? a : b,
        );

        setActiveSection(best.target.id);
      },
      {
        threshold: 0.45,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className={"text-4xl font-bold tracking-tight sm:text-5xl"}>
          <Link href="/" className="text-primary" onClick={handleHomeClick}>
            Peter Jung
          </Link>
        </h1>
        <h2 className="text-primary mt-3 text-lg font-medium tracking-tight sm:text-xl">
          Software Engineer & Designer
        </h2>
        <p className="text-secondary mt-4 max-w-xs leading-normal">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navLinks.map((link) => (
              <li key={link.id}>
                <InPageNavItem
                  id={link.id}
                  label={link.label}
                  active={activeSection === link.id}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="mt-8 ml-1 flex items-center" aria-label="Social media">
        {socialLinks.map((social) => (
          <SocialLink
            key={social.href}
            href={social.href}
            label={social.label}
            icon={getSocialIcon(social.icon)}
          />
        ))}
      </ul>
    </header>
  );
}
