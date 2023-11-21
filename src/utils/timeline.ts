
export interface Experience {
	inc: string;
	post: string;
	duration: {
		end: string;
		start: string;
	};
}

export interface TimelineEntry extends Partial<Experience> {
	date?: string;
}

export function surroundWithDate(
	entries: (Experience | null)[]
): (TimelineEntry | null)[] {
	const result: (TimelineEntry | null)[] = [];

	for (let i = 0; i < entries.length; i++) {
		const entry = entries[i];
		if (entry === null) {
			// If it's a null entry, just push it to the result
			result.push(null);
		} else {
			// If it's an experience, surround it with the corresponding date
			if (
				i === 0 ||
				(i - 1 >= 0 &&
					entries[i - 1]?.duration.end !== entry.duration.start)
			)
				result.push({ date: entry.duration?.start });
			result.push(entry);
			result.push({ date: entry.duration?.end });
		}
	}

	return result;
}

export function sortAndFillTimeline(experiences: Experience[]): (Experience | null)[] {
	// Sort experiences by start date
	return experiences
		.sort(
			(a, b) =>
				new Date(a.duration.start).getTime() -
				new Date(b.duration.start).getTime()
		)
		.reduce((acc, _, i, exp) => {
			if (i === exp.length - 1) return [...acc, exp[i]];

			// Calculate the gap between current and next experience
			const currentEnd = new Date(exp[i].duration.end);
			const nextStart = new Date(exp[i + 1].duration.start);
			const gap = Math.floor(
				(nextStart.getTime() - currentEnd.getTime()) /
					(1000 * 3600 * 24 * 30)
			);
			console.log(gap, nextStart, currentEnd, _);
			
			if (gap > 0)
				// Fill the gap with null entries
				return [...acc, exp[i], null];
			else return [...acc, exp[i]];
		}, [] as (Experience | null)[]);
}
