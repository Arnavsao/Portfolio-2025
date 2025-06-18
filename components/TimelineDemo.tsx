import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <div>
      <p className="mb-2 text-lg font-semibold text-neutral-800 md:text-sm dark:text-neutral-200">
        BridgeYu: SDE Intern
      </p>
      <ul className="list-disc pl-5 mb-4 text-xs font-normal text-neutral-700 md:text-sm dark:text-neutral-300 space-y-1">
        <li>Led the frontend development of the main web application using React, Redux, and RTK Query.</li>
        <li>Worked collaboratively in an agile team, participating in daily standups, code reviews, and sprint planning.</li>
        <li>Implemented scalable state management and API integration to enhance performance and maintainability.</li>
        <li>Utilized Jira, GitHub, and Slack for efficient project tracking and team communication.</li>
      </ul>
    </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/experience/BridgeYU1.png"
              alt="BridgeYU Dashboard"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experience/BridgeYU2.png"
              alt="BridgeYU Features"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experience/BridgeYU3.png"
              alt="BridgeYU Interface"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experience/BridgeYU4.png"
              alt="BridgeYU Components"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Late 2024",
      content: (
        <div>
          <div>
      <p className="mb-2 text-lg font-semibold text-neutral-800 md:text-sm dark:text-neutral-200">
        Titans AI: Software Developer Freelancer
      </p>
      <ul className="list-disc pl-5 mb-4 text-xs font-normal text-neutral-700 md:text-sm dark:text-neutral-300 space-y-1">
        <li>Built AI chatbots with NLP to improve user interaction and automate repetitive workflows.</li>
        <li>Integrated third-party SDKs into mobile applications to enhance core functionality.</li>
        <li>Collaborated with designers and data scientists to deliver polished features on time.</li>
      </ul>
    </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/experience/TitansAi1.png"
              alt="TitansAI Dashboard"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experience/TitansAi2.png"
              alt="TitansAI Features"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experience/TitansAi3.png"
              alt="TitansAI Interface"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experience/TitansAi4.png"
              alt="TitansAI Components"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Open Source Contributions",
      content: (
        <div>
  <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    Participated in GSSOC 2024 and contributed to 2 open-source projects
  </p>
  <div className="mb-8 space-y-2">
    <div className="flex flex-col text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
      <span className="font-medium">✅ AgriLearnNetwork</span>
      <span>
        Added chatbot integration and designed the contact page.{' '}
        <a
          href="https://github.com/Arnavsao/AgriLearnNetwork"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub ↗
        </a>
      </span>
    </div>
    <div className="flex flex-col text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
      <span className="font-medium">✅ krishiconnect</span>
      <span>
        Implemented light/dark themes, created the hero section, and made the site fully responsive.{' '}
        <a
          href="https://github.com/Arnavsao/krishiconnect"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub ↗
        </a>
      </span>
    </div>
  </div>
</div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <div>
      <p className="mb-2 text-lg font-semibold text-neutral-800 md:text-sm dark:text-neutral-200">
        HealthyBites: SDE Intern
      </p>
      <ul className="list-disc pl-5 mb-4 text-xs font-normal text-neutral-700 md:text-sm dark:text-neutral-300 space-y-1">
        <li>Developed and maintained a responsive frontend using Next.js and Tailwind CSS.</li>
        <li>Resolved major UI stability issues by integrating improved layout structures and graphical elements.</li>
        <li>Ensured SEO best practices, accessibility compliance, and cross-browser compatibility across the platform.</li>
      </ul>
    </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/experience/HealtyBites1.png"
              alt="HealthyBites Dashboard"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experience/HealtyBites2.png"
              alt="HealthyBites Features"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experience/HealtyBites3.png"
              alt="HealthyBites Interface"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/experience/HealtyBites4.png"
              alt="HealthyBites Components"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
