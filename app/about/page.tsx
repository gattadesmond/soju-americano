export default function AboutPage() {
  return (
    <section className="pb-20">
      <div className="text-muted mb-0 text-lg font-semibold"># About me</div>
      <div className="mt-3 space-y-3 pl-1 leading-relaxed">
        <p>Hi, I&apos;m Việt Hùng 👋.</p>
        <p>
          I design & code things on the web, and have great interest in updating
          new technologies.
        </p>
        <p>
          My best work is to create experiences that look and function
          beautifully across anything that can access the web.
        </p>
      </div>

      <hr className="border-separator my-8" />

      <div className="text-muted mb-0 text-lg font-semibold">
        # Work Experience
      </div>
      <div className="mt-4 space-y-6 pl-1">
        <div className="flex gap-3">
          <div className="mt-1.5 shrink-0">
            <div className="bg-warning size-2 rounded-full" />
          </div>
          <div>
            <div className="text-muted text-sm">Dec 2018 - Present</div>
            <div className="py-1 font-semibold">
              Senior Front-end designer
              <span className="text-muted ml-4 font-normal">
                @ M-Service Company
              </span>
            </div>
            <ul className="text-muted mt-2 list-inside list-disc space-y-2 text-sm">
              <li>
                Developed and designed Momo.vn website frontend using
                HTML/CSS/JS(ES6), React, Next JS, SCSS, and Bootstrap 4
                (previous).
              </li>
              <li>
                Built a Design System for transitioning visual design into
                maintainable HTML & CSS and make consistency to products.
              </li>
              <li>
                Optimized UI load times and performance by up to 95% Google
                PageSpeed
              </li>
              <li>
                Created responsive HTML email templates that improved email CTR
                rates, readability and brand identity
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="mt-1.5 shrink-0">
            <div className="bg-warning size-2 rounded-full" />
          </div>
          <div>
            <div className="text-muted text-sm">Dec 2017 - Dec 2018</div>
            <div className="py-1 font-semibold">
              Senior Front-end Developer
              <span className="text-muted ml-4 font-normal">
                @ Foody Corporation Company
              </span>
            </div>
            <ul className="text-muted mt-2 list-inside list-disc space-y-2 text-sm">
              <li>Supported Foody and Now website desktop and mobile sites</li>
              <li>
                Communicated with back-end developers for any front-end
                problematic issues.
              </li>
              <li>
                Building reusable components with principles of component-driven
                architecture and front-end libraries for future use
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="mt-1.5 shrink-0">
            <div className="bg-warning size-2 rounded-full" />
          </div>
          <div>
            <div className="text-muted text-sm">Sep 2015 - Dec 2017</div>
            <div className="py-1 font-semibold">
              Front-end Developer
              <span className="text-muted ml-4 font-normal">
                @ Vien Thong A Company
              </span>
            </div>
            <ul className="text-muted mt-2 list-inside list-disc space-y-2 text-sm">
              <li>
                Designed and created web templates, user interfaces and user
                experience for the main website VTA.
              </li>
              <li>Managed frontend ops using NPM, Bower, Grunt, Gulp.</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="mt-1.5 shrink-0">
            <div className="bg-warning size-2 rounded-full" />
          </div>
          <div>
            <div className="text-muted text-sm">Feb 2014 - Sep 2015</div>
            <div className="py-1 font-semibold">
              Front-end Developer
              <span className="text-muted ml-4 font-normal">
                @ Platform 5 Company
              </span>
            </div>
            <ul className="text-muted mt-2 list-inside list-disc space-y-2 text-sm">
              <li>Experience with compiled CSS (SASS/Compass)</li>
              <li>
                Bringing mock-ups to life using HTML, CSS, JavaScript.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-separator my-8" />

      <div className="text-muted mb-0 text-lg font-semibold"># Skills</div>
      <ol className="mt-3 list-inside list-decimal space-y-2 pl-1">
        <li>🔍 Attention to detail</li>
        <li>🍎 Innovative problem-solving</li>
        <li>🐼 React, Vue, Gulp, Webpack</li>
        <li>🌱 HTML, CSS, SCSS, JavaScript</li>
        <li>🕹 UI/UX</li>
        <li>🎾 Adobe Photoshop, Figma, Illustrator</li>
      </ol>
    </section>
  );
}
