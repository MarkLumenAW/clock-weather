import { Icon } from "@iconify/react";

export default function Footer(props) {
  return (
    <section className="flex flex-row items-center gap-8">
      <span className="text-xs tracking-tighter px-6 text-violet-300">Designed and Coded by Alex Wang</span>
      <div className="flex pr-4 gap-2">
        <a href="https://github.com/MarkLumenAW/clock-weather" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:github" color="#c4b5fd" width="1rem" />
        </a>
        <a href="https://www.linkedin.com/in/alexwang-au/" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:linkedin" color="#c4b5fd" width="1rem" />
        </a>
      </div>
    </section>
  );
};
