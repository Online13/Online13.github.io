import { AppearOnceView } from "@/components/atoms/presentations/appear-once-view";
import clsx from "clsx";
import { ReactNode } from "react";

const REWARD_DATA = [
	{
		id: 1,
		place: "1st place",
		date: "2023",
		name: (
			<span className="text-[#f06800]">Orange Digital Center Champions</span>
		),
		description: (
			<>
				Programming competition which aims to highlight the technological
				talent of young developers in{" "}
				<span className="font-medium underline">Africa & Middle East</span>{" "}
				and to encourage team collaboration
			</>
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
		description:
			"Goal : to reduce our carbon footprint by prioritizing public transports over personal vehicles, thus reducing the environmental damages.",
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
			className={clsx(
				"space-y-2 max-w-lg border border-black px-4 py-8 rounded-xl",
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
					<b className="font-semibold text-3xl">{compete}</b>
					<br />
				</h4>
			</div>
			<p className="text-lg pl-4">{description}</p>
		</div>
	);
}

export function RewardSection() {
	return (
		<div className="w-full px-44 space-y-8 flex flex-col pt-10 pb-20">
			<h2 className="text-4xl font-semibold pl-32">Some rewards</h2>
			<div className="w-full flex items-center gap-4 pl-32">
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
							className={reward.id === 1 ? "bg-black text-white" : "bg-white"}
							description={reward.description}
						/>
					</AppearOnceView>
				))}
			</div>
		</div>
	);
}
