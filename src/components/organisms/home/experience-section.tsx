import { EXP_DATA } from "@/data/experience";

export function ExperienceSection() {
	return (
		<div className="space-y-8">
			<div className="px-44">
				<div className="pl-32">
					<h2 className="text-3xl font-semibold">Experiences</h2>
				</div>
			</div>
			<div className="flex gap-4 overflow-auto pb-12">
				<div className="pl-40"></div>
				<div className="pl-28"></div>
				{EXP_DATA.map((exp, i) => (
					<div
						className="w-[400px] shrink-0 p-4 border border-[#bbbbbb] rounded-md bg-slate-100"
						key={`images-${i}`}
					>
						<h4>
							{exp.duration.start} - {exp.duration.end}
						</h4>
						<h3 className="text-xl font-medium text-[#002AFF] mb-2">
							{exp.post} - {exp.inc}
						</h3>
						<p>{exp.description}</p>
					</div>
				))}
				<div className="pl-40"></div>
				<div className="pl-28"></div>
			</div>
		</div>
	);
}