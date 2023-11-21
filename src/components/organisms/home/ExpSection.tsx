import { EXP_DATA } from "src/data/experience";
import { sortAndFillTimeline, surroundWithDate } from "src/utils/timeline";

const TIMELINE = surroundWithDate(sortAndFillTimeline(EXP_DATA));
console.log(TIMELINE);

function ExpSection() {
	return (
		<div className="w-full bg-[#0E0F12] text-slate-100 py-20 space-y-20 flex flex-col">
			<h2 className="text-5xl font-semibold px-40">Experiences</h2>
			<div className="w-full h-full flex flex-row items-end overflow-auto pb-12">
				<div className="w-40 shrink-0"></div>
				{TIMELINE.map((t, i) => {
					if (t === null)
						return (
							<div className="w-full h-20 flex items-center space-x-4">
								<div className="w-[280px] h-[1px] border border-dashed opacity-25"></div>
							</div>
						);

					if ("date" in t) {
						return (
							<div className="h-20 flex items-center px-4" key={i}>
								<div className="whitespace-nowrap">{t?.date}</div>
							</div>
						);
					} else {
						return (
							<div className="w-auto h-full" key={i}>
								{/* values */}
								<div className="p-4">
									<h4 className="text-3xl whitespace-nowrap">
										{t.post}
									</h4>
									<h5 className="text-xl capitalize whitespace-nowrap">
										{t.inc}
									</h5>
								</div>
								{/* axis */}
								<div className="h-20 flex items-center space-x-4">
									<div className="h-[1px]"></div>
								</div>
							</div>
						);
					}
				})}
				<div className="w-1/2 shrink-0"></div>
			</div>
		</div>
	);
}

export default ExpSection;
