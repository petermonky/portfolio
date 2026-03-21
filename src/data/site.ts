export type NavLink = {
  id: string;
  label: string;
};

export type SocialIconName =
  | "github"
  | "linkedin"
  | "codepen"
  | "instagram"
  | "goodreads";

export type SocialLink = {
  href: string;
  label: string;
  icon: SocialIconName;
};

export type ExperienceItem = {
  id: string;
  periods: string[];
  role: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  href: string;
  description: string;
  imageAlt: string;
  imageDirectory: string;
};

export type TextSegment =
  | { type: "text"; content: string }
  | { type: "link"; content: string; href: string };

export const aboutParagraphs: TextSegment[][] = [
  [
    {
      type: "text",
      content: "I'm a final-year Computer Science undergraduate at the ",
    },
    {
      type: "link",
      content: "National University of Singapore",
      href: "https://www.comp.nus.edu.sg/about/",
    },
    {
      type: "text",
      content:
        ", with a focus on building accessible and beautiful software. I care deeply about design and am especially drawn to human-computer interaction, both in practice and in research.",
    },
  ],
  [
    {
      type: "text",
      content:
        "I am currently completing my studies and working on my final year project, where I investigate the effects of alternating attention on people's reliance on LLMs. Over the course of my degree, I have developed strong interests in software engineering, artificial intelligence, and human-computer interaction. I hope to continue deepening both my academic and industry experience in these areas.",
    },
  ],
  [
    {
      type: "text",
      content:
        "Previously, I have taken on a range of roles, from teaching positions at the university to technical roles at medium- and large-scale firms, including ",
    },
    {
      type: "link",
      content: "ByteDance",
      href: "https://www.bytedance.com/en/",
    },
    {
      type: "text",
      content: ", ",
    },
    {
      type: "link",
      content: "Source Academy",
      href: "https://about.sourceacademy.org/",
    },
    {
      type: "text",
      content: ", and ",
    },
    {
      type: "link",
      content: "Emart",
      href: "https://company.emart.com/en/main.do",
    },
    {
      type: "text",
      content: ". My experience in the ",
    },
    {
      type: "link",
      content: "Republic of Korea Air Force",
      href: "https://www.airforce.mil.kr/user/indexSub.action?codyMenuSeq=56562&siteId=airforce-eng",
    },
    {
      type: "text",
      content:
        " also gave me time to reflect more deeply on what I want from my career, and it has only strengthened my commitment to this path.",
    },
  ],
  [
    {
      type: "text",
      content:
        "In my free time, I enjoy a few unusual hobbies, including solving The New York Times crosswords and knitting.",
    },
  ],
];

export const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/petermonky", label: "GitHub", icon: "github" },
  {
    href: "https://www.linkedin.com/in/hyunseok-peter-jung/",
    label: "LinkedIn",
    icon: "linkedin",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "rokaf-interpreter",
    periods: ["Oct 2023 — Jul 2025"],
    role: "Staff Sergeant, Interpreter",
    company: "Republic of Korea Air Force",
    companyUrl:
      "https://www.airforce.mil.kr/user/indexSub.action?codyMenuSeq=56562&siteId=airforce-eng",
    description:
      "Lived in Seoul translating aerospace documentation for ICAO/FAA/NASA compliance and keeping joint operations aligned. Helped the ROK-US Freedom Shield exercise run smoothly by interpreting at Camp Humphreys and in the MND Exercise Control Cell.",
    technologies: [],
  },
  {
    id: "bytedance-2023",
    periods: ["May 2023 — Jul 2023", "May 2022 — Jul 2022"],
    role: "Software Engineer Intern",
    company: "ByteDance",
    companyUrl: "https://www.bytedance.com/en/",
    description:
      "Launched a Salesforce-integrated referral experience for BytePlus that onboarded 10+ new mid-to-large enterprise partners. Helped migrate backend services to keep the platform flexible while improving test coverage. Built three Next.js product pages for MusicLab, Effects, and MediaLive that increased traffic, and contributed to an internal React/FastAPI CMS that sped up marketing content delivery.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Salesforce",
      "Python",
      "FastAPI",
    ],
  },
  {
    id: "nustas-2021-2022",
    periods: ["Aug 2021 — Nov 2022"],
    role: "Teaching Assistant",
    company: "National University of Singapore",
    companyUrl: "https://www.nus.edu.sg/about",
    description:
      "Supported students across CS2102, CS2103T, CS2030S, and CS1101S with office hours, mentorship, and feedback, helping keep the cohort average around an A-. Consistently kept grading and support on pace with a 4.7/5 student satisfaction score.",
    technologies: ["PostgreSQL", "Java", "JavaScript"],
  },
  {
    id: "sourceacademy-2021",
    periods: ["Jan 2021 — May 2021"],
    role: "Full Stack Developer",
    company: "Source Academy",
    companyUrl: "https://about.sourceacademy.org/",
    description:
      "Polished the step-by-step debugger used in the classroom, handled lexical scoping quirks, and documented the reduction semantics so the JavaScript-based stepper stayed reliable for students and the presentation at SPLASH-E.",
    technologies: ["JavaScript", "TypeScript", "HTML/CSS", "Node.js"],
  },
  {
    id: "emart-2018",
    periods: ["May 2018 — Jul 2018"],
    role: "Full Stack Developer Intern",
    company: "Emart",
    companyUrl: "https://company.emart.com/en/main.do",
    description:
      "Designed six customer-facing screens in Figma, shepherded weekly alignment to keep the UI/UX consistent, and translated those specs into React/Rails work that shipped two user-facing workflows.",
    technologies: [
      "Figma",
      "JavaScript",
      "TypeScript",
      "React",
      "Ruby",
      "Ruby on Rails",
    ],
  },
];

export const projectItems: ProjectItem[] = [
  {
    id: "pulsepace",
    title: "PulsePace",
    href: "https://github.com/PulsePace/PulsePace",
    description:
      "A multiplayer rhythm game for iPad, developed for iPadOS using MVVM principles for a clean and maintainable architecture.",
    imageAlt: "PulsePace GitHub card",
    imageDirectory: "/images/projects/pulsepace.webp",
  },
  {
    id: "minecraft-peggle",
    title: "Minecraft Peggle",
    href: "https://github.com/petermonky/minecraft-peggle",
    description:
      "A Minecraft-themed Peggle game for iPad, built with Swift and SwiftUI, featuring multiple game modes, a level designer, and custom scoring and visual effects.",
    imageAlt: "Minecraft Peggle GitHub card",
    imageDirectory: "/images/projects/minecraft-peggle.webp",
  },
  {
    id: "google-minesweeper-clone",
    title: "Google Minesweeper",
    href: "https://gmsc-six.vercel.app/",
    description:
      "A modern take on Minesweeper built with React and Sass, featuring multiple difficulty levels, polished game logic, and a responsive interface.",
    imageAlt: "Google Minesweeper clone card",
    imageDirectory: "/images/projects/google-minesweeper.webp",
  },
];
