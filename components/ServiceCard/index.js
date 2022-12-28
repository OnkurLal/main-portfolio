import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
const SkillsMap = dynamic(() => import("../SkillsMap"), { ssr: false });

const ServiceCard = ({ skills }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  const skillsMap = skills.map((skill) => (
    <SkillsMap key={skill.id} skill={skill} />
  ));

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <p className="text-2xl grid gap-6">
        {skills
          ? skillsMap
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
      </p>
    </div>
  );
};

export default ServiceCard;
