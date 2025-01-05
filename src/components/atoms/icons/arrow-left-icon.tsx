import { cn } from "@/utils";

type ArrowLeftIconProps = {
    className?: string;
}

export function ArrowLeftIcon({ className }: ArrowLeftIconProps) {
	return (
		<svg
        fill="none"
        viewBox="0 0 24 24"
        className={cn("w-4 h-4", className)}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5 12H19M19 12L13 6M19 12L13 18"
				stroke="#000000"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
