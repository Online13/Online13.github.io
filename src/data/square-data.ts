import { SquareData } from "src/components/atoms/presentations/square";

export const SQUARE_DATA_LEFT: SquareData[] = [
	{
		id: 0,
		opacity: 1,
		position: { x: 0, y: 200 },
		scale: 1.4,
		rotate: 0,
		color: "#fb3e3e",
	},
	{
		id: 1,
		opacity: 1,
		position: { x: 428, y: 63 },
		scale: 0.38,
		rotate: 0,
		color: "#3c3ce7",
	},
	{
		id: 2,
		opacity: 1,
		position: { x: 384, y: 91 },
		scale: 0.25,
		rotate: 0,
		color: "#f4f42d",
	},
	{
		id: 3,
		opacity: 1,
		position: { x: 383, y: 491 },
		scale: 0.25,
		rotate: 0,
		color: "#f4b134",
	},
].map((data) => ({
	...data,
	rotate: Math.random() * 360 + 80,
}));

export const SQUARE_DATA_RIGHT: SquareData[] = [
	{
		id: 4,
		opacity: 1,
		position: { x: 1153, y: 325 },
		scale: 0.37,
		rotate: 0,
		color: "#d815d8",
	},
	{
		id: 5,
		opacity: 1,
		position: { x: 1373, y: 191 },
		scale: 0.97,
		rotate: 0,
		color: "#39e675",
	},
	{
		id: 6,
		opacity: 1,
		position: { x: 969, y: 497 },
		scale: 0.3,
		rotate: 0,
		color: "#df31df",
	},
	{
		id: 7,
		opacity: 1,
		position: { x: 1269, y: 597 },
		scale: 0.7,
		rotate: 0,
		color: "#e72727",
	},
].map((data) => ({
	...data,
	rotate: Math.random() * 360 + 80,
}));
