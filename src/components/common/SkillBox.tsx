import { skillsData } from "../../data/skills";

export const SkillBox = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-5 px-4">
      {skillsData.map((skill) => (
        <div
          key={skill.id}
          className="flex flex-col items-center justify-center p-4 
                     bg-(--bg-card) border border-(--accent-border) 
                     rounded-3xl transition-all duration-300 
                     hover:shadow-(--shadow) hover:-translate-y-2 
                     w-full min-h-15 text-center"
        >
          <span className="text-2xl font-medium">{skill.name}</span>
          <p className="text-pretty font-extralight text-xs">{skill.category}</p>
        </div>
      ))}
    </div>
  );
};