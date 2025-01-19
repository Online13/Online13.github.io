interface EducationItemProps {
	place: string;
	year: string;
	title: string;
}

export function EducationItem({ place, title, year }: EducationItemProps) {
	return (
		<div className="group py-4 pr-4 cursor-pointer hover:bg-stone-100/70 hover:px-4 transition-[padding] duration-500 rounded-md grid grid-cols-3">
			<h2>{year}</h2>
			<div className="col-span-2">
				<b className="">{place}</b>
				<p className="text-stone-500 group-hover:text-primary transition-colors duration-700">{title}</p>
			</div>
		</div>
	);
}
