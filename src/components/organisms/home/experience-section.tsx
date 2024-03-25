import { EXP_DATA } from "@/data/experience";

export function ExperienceSection() {
	return (
		<div className="space-y-8">
			<div className="flex gap-4 overflow-auto pb-12">
				<div className="pl-40"></div>
				<div className="pl-28"></div>
				<ol className="items-center sm:flex"></ol>
				{EXP_DATA.map((exp, i) => (
					<li className="relative mb-6 sm:mb-0">
						<div className="flex items-center">
							<div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
								<svg
									className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
								</svg>
							</div>
							<div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
						</div>
						<div className="mt-3 sm:pe-8">
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
						</div>
					</li>
				))}
				<div className="pl-40"></div>
				<div className="pl-28"></div>
			</div>
		</div>
	);
}
