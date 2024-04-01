import { ReactNode } from "react";
import { cn } from "@/lib/shadcn/utils";
import { AppearOnceView } from "@/components/atoms/presentations/appear-once-view";
import { OutlineText } from "@/components/atoms/typography/outline-text";

const REWARD_DATA = [
	{
		id: 1,
		place: "1st place",
		date: "2023",
		name: (
			<span className="group-hover:text-[#f06800]">
				Orange Digital Center Champions
			</span>
		),
		description: (
			<p className="text-lg">
				Programming competition which aims to highlight the technological
				talent of young developers in{" "}
				<span className="font-medium underline">Africa & Middle East</span>{" "}
				and to encourage team collaboration
			</p>
		),
	},
	{
		id: 2,
		place: "3rd place",
		date: "2023",
		name: (
			<span>
				Hackathon <span className="text-blue-700">Clean code</span>
			</span>
		),
		description: (
			<p className="text-lg">
				Goal : to reduce our carbon footprint by prioritizing public
				transports over personal vehicles, thus reducing the environmental
				damages.
			</p>
		),
	},
];

type RewardItemProps = {
	rank: string;
	date: string;
	className?: string;
	titleClassName?: string;
	compete: string | ReactNode;
	description: string | ReactNode;
};

function RewardItem({
	rank,
	date,
	compete,
	className,
	description,
}: RewardItemProps) {
	return (
		<div
			className={cn(
				"transition-[background,color] duration-300 bg-white",
				"space-y-2 max-w-xl border border-black pl-4 pr-6 py-8 group",
				className
			)}
		>
			<div className="flex items-center gap-2">
				<div className="pt-4 text-5xl">🥇</div>
				<h4 className="text-xl">
					<span className="underline">{rank}</span>
					<span className="text-sm font-mono pl-2 relative bottom-1">
						({date})
					</span>
					<br />
					<b className="font-semibold text-3xl whitespace-nowrap">
						{compete}
					</b>
					<br />
				</h4>
			</div>
			<div className="pl-4">{description}</div>
		</div>
	);
}

export function RewardSection() {
	return (
		<div className="relative w-full px-8 md:px-12 lg:px-32 xl:px-72 lex flex-col py-20 bg-[whitesmoke]">
			<div className="absolute top-20 left-12">
				<OutlineText className="origin-top-right -rotate-90 -translate-x-full">
					Awards.
				</OutlineText>
			</div>
			<p className="max-w-lg text-2xl pb-12">
				These experiences have not only deepened my{" "}
				<b className="font-semibold">
					understanding of my own capabilities
				</b>{" "}
				but also emphasized the importance of{" "}
				<b className="font-semibold">teamwork</b> in achieving success.
			</p>
			<div className="w-full flex flex-col xl:flex-row items-center justify-stretch gap-4">
				{REWARD_DATA.map((reward) => (
					<AppearOnceView
						propagation={false}
						classNameHidden="scale-0"
						classNameAppear="scale-100"
						className="transition-transform duration-500"
						key={`reward-item-${reward.id}`}
					>
						<RewardItem
							date={reward.date}
							rank={reward.place}
							compete={reward.name}
							className={
								reward.id === 1
									? "hover:bg-[#0E0F12] hover:text-white"
									: ""
							}
							description={reward.description}
						/>
					</AppearOnceView>
				))}
			</div>
		</div>
	);
}
