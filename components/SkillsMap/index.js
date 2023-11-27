import React from "react";

export default function SkillsMap({ skill }) {
  return (
    <div key={skill.id} className="flex justify-center items-center">
      <h1>{skill.name}</h1>
      <img src={skill.imgSrc} alt={skill.alt} width={48} />
    </div>
  );
}
