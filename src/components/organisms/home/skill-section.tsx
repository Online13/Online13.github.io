import { AppearOnceView } from "@/components/atoms/presentations/appear-once-view";
import clsx from "clsx";

type ProjectViewProps = {
	title: string;
};

function ProjectView({ title }: ProjectViewProps) {
	return (
		<div className="w-full h-full rounded-xl relative overflow-hidden border border-black bg-white">
			{/* Image */}
			{/* <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-20"></div> */}
			<div className="absolute bottom-0 left-0 w-full py-8 px-8 z-30 space-y-2">
				<h2 className="text-3xl font-semibold">{title}</h2>
				<p className="max-w-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptatem sequi deserunt cumque rerum similique perspiciatis id
					illo odio natus doloribus fugiat in vel ratione.
				</p>
				<div className="flex items-center gap-2">
					<div
						className={clsx(
							"border px-4 rounded-lg leading-[40px] bg-white flex items-center justify-center",
							"cursor-pointer active:scale-95"
						)}
					>
						<span className="h-8">React</span>
					</div>
					<div
						className={clsx(
							"border px-4 rounded-lg leading-[40px] bg-white flex items-center justify-center",
							"cursor-pointer active:scale-95"
						)}
					>
						<span className="h-8">Typescript</span>
					</div>
					<div
						className={clsx(
							"border px-4 rounded-lg leading-[40px] bg-white flex items-center justify-center",
							"cursor-pointer active:scale-95"
						)}
					>
						<span className="h-8">Node</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export function SkillSection() {
	// const [showFilter, setShowFilter] = useState(false);

	return (
		<div
			className="relative z-10 w-full bg-[whitesmoke]"
			id="projects"
		>
			<div className="w-full px-40 py-20">
				<div className="w-full gap-8 px-20">
					<div className="flex items-baseline justify-between">
						<h2 className="text-4xl font-semibold">
							Some Things I’ve Built.
						</h2>
						<div className="">
							<button className="border border-[#b1b1b1] rounded-md px-4 py-1 leading-6 active:scale-95 duration-150 flex items-center gap-2">
								<span className="relative top-1 text-lg">See more</span>
							</button>
						</div>
					</div>
					{/* filtering */}
					<div className="pt-8 flex gap-4">
						{["Chester App", "Redax App"].map((title, id) => (
							<AppearOnceView
								propagation={false}
								key={`project-${id}`}
								classNameHidden="scale-0"
								classNameAppear="scale-100"
								className="w-full h-[470px] transition-transform duration-500"
							>
								<ProjectView title={title} />
							</AppearOnceView>
						))}
						{/* <div
							className={clsx(
								"text-xl space-y-4 w-[340px] relative z-50 transition-[width] duration-200 overflow-hidden",
								{ "!w-0": !showFilter }
							)}
						>
							{showFilter && (
								<Fragment>
									<div className="py-3 space-y-2">
										<h3 className="font-medium text-[#002AFF] text-right">
											Languages
										</h3>
										<div className="text-slate-800 text-base flex items-center flex-wrap justify-end gap-y-2 gap-x-2">
											{LANGUAGES.map((lang) => (
												<FilterButton
													data={lang}
													key={`lang-${lang.id}`}
												/>
											))}
										</div>
									</div>
									<div className="py-3 space-y-2">
										<h3 className="font-medium text-[#002AFF] text-right">
											Libraries / Frameworks
										</h3>
										<div className="text-slate-800 text-base flex items-center flex-wrap justify-end gap-y-2 gap-x-2">
											{LIBRARIESFRAMEWORKS.map((lib) => (
												<FilterButton
													data={lib}
													key={`lib-${lib.id}`}
												/>
											))}
										</div>
									</div>
									<div className="py-3 space-y-2">
										<h3 className="font-medium text-[#002AFF] text-right">
											Logicièles / multimedia
										</h3>
										<div className="text-slate-800 text-base flex items-center flex-wrap justify-end gap-y-2 gap-x-2">
											{LOGICIELSMULTIMEDIA.map((log) => (
												<FilterButton
													data={log}
													key={`log-${log.id}`}
												/>
											))}
										</div>
									</div>
								</Fragment>
							)}
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
