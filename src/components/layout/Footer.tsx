import ExternalTextLink from "@/components/common/ExternalTextLink";

export default function Footer() {
  return (
    <footer className="text-tertiary max-w-md pb-16 text-sm sm:pb-0">
      {/* TODO: */}
      <p>
        Built with{" "}
        <ExternalTextLink href="https://nextjs.org/" label="Next.js">
          Next.js
        </ExternalTextLink>{" "}
        and{" "}
        <ExternalTextLink href="https://tailwindcss.com/" label="Tailwind CSS">
          Tailwind CSS
        </ExternalTextLink>
        , deployed with{" "}
        <ExternalTextLink href="https://vercel.com/" label="Vercel">
          Vercel
        </ExternalTextLink>
        . Design inspired by{" "}
        <ExternalTextLink
          href="https://brittanychiang.com/"
          label="Brittany Chiang"
        >
          Brittany Chiang
        </ExternalTextLink>
        .
      </p>
    </footer>
  );
}
