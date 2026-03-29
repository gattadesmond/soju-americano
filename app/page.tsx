import { LinkListSection, type LinkItem } from "@/components/link-list-section";

const listReading: LinkItem[] = [
  {
    link: "https://dmitripavlutin.com/",
    name: "https://dmitripavlutin.com/",
    isFeature: true,
  },
  {
    link: "https://defensivecss.dev/",
    name: "https://defensivecss.dev/",
    isFeature: true,
  },
  {
    link: "https://css-tricks.com/",
    name: "https://css-tricks.com/",
    isFeature: true,
  },
  {
    link: "https://www.joshwcomeau.com/",
    name: "https://www.joshwcomeau.com/",
    isFeature: true,
  },
  {
    link: "https://tympanus.net/codrops/",
    name: "https://tympanus.net/codrops/",
    isFeature: true,
  },
  {
    link: "https://web.dev/blog/",
    name: "https://web.dev/blog/",
    isFeature: true,
  },
  {
    link: "https://www.smashingmagazine.com/",
    name: "https://www.smashingmagazine.com/",
    isFeature: true,
  },
  {
    link: "https://ishadeed.com/",
    name: "https://ishadeed.com/",
    isFeature: true,
  },
  {
    link: "https://moderncss.dev/",
    name: "https://moderncss.dev/",
    isFeature: true,
  },
  {
    link: "https://www.taniarascia.com/blog",
    name: "https://www.taniarascia.com/blog",
    isFeature: false,
  },
  {
    link: "https://goodui.org/leaks/",
    name: "https://goodui.org/leaks/",
    isFeature: false,
  },
  {
    link: "https://growth.design/",
    name: "https://growth.design/",
    isFeature: false,
  },
  {
    link: "https://davidwalsh.name/",
    name: "https://davidwalsh.name/",
    isFeature: false,
  },
];

const listLearnFigma: LinkItem[] = [
  {
    link: "https://min-max-calculator.9elements.com/",
    name: "Min-Max-Value Interpolation",
    isFeature: true,
  },
  {
    link: "https://www.designsystemsforfigma.com/",
    name: "Design Systems for Figma",
    isFeature: true,
  },
];

const listTools: LinkItem[] = [
  {
    link: "https://min-max-calculator.9elements.com/",
    name: "Min-Max-Value Interpolation",
    isFeature: true,
  },
  {
    link: "https://www.designsystemsforfigma.com/",
    name: "Design Systems for Figma",
    isFeature: true,
  },
];

export default function Home() {
  return (
    <section className="pb-20">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
        Soju
      </h1>

      <p className="text-muted mt-5 max-w-2xl leading-relaxed">
        I design & code things on the web. This website is my digital garden,
        where I store the things I have been learning and love.
      </p>

      <div className="bg-surface shadow-surface border-separator relative mt-8 -mx-2 overflow-hidden rounded-xl border sm:-mx-0">
        <div className="bg-muted relative aspect-[800/533] w-full max-h-[min(50vh,533px)]">
          {/* Optional: place bg-soju-1.png in /public (same as site cũ). */}
          {/* eslint-disable-next-line @next/next/no-img-element -- optional local asset */}
          <img
            alt=""
            className="h-full w-full object-cover"
            src="/bg-soju-1.png"
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10">
        <div className="bg-surface shadow-surface border-separator rounded-xl border p-6">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Pomodoro
          </h3>
          <ol className="mt-3 list-inside list-decimal space-y-2">
            <li>
              🐼 <strong className="font-semibold">1 pomodoro</strong> for read
              book
            </li>
            <li>
              🚶 <strong className="font-semibold">1 pomodoros</strong> for long
              walk
            </li>
          </ol>
        </div>

        <LinkListSection items={listReading} title="Good websites to learn" />
        <LinkListSection items={listLearnFigma} title="Learn Figma" />
        <LinkListSection items={listTools} title="Best tools" />
      </div>
    </section>
  );
}
