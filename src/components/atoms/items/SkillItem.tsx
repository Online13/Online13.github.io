interface SkillItemProps {
   category: string;
   skills: string[];
}

function SkillItem({ category, skills }: SkillItemProps) {
   return (
      <div className="group py-4 pr-4 cursor-pointer hover:bg-stone-100/70 hover:px-4 transition-[padding] duration-500 rounded-md">
         <h3 className="text-stone-500 group-hover:text-primary">{category}</h3>
         <div className="whitespace-nowrap">{skills.join(', ')}</div>
      </div>
   );
}

export { SkillItem };