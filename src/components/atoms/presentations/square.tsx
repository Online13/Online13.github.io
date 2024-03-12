import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export type Position = { x: number; y: number };

export type SquareData = {
	id: number;
	scale: number;
	color?: string;
	rotate: number;
	opacity: number;
	position: Position;
};

type SquareItemProps = {
	id: number;
	scale: number;
	position: Position;
};

const DIRECTION = [
	{ x: 1, y: 1 },
	{ x: -1, y: -1 },
	{ x: -1, y: 1 },
	{ x: 1, y: -1 },
];

function SquareItem({ id, scale, position }: SquareItemProps) {
	const animId = useRef<number | null>(null);
	const [_position, setPosition] = useState<Position>(position);
	const d = useRef(DIRECTION.sort(() => (Math.random() > 0.5 ? 1 : -1))[0]);
	const [rotate, setRotate] = useState<number>(
		Math.floor(Math.random() * 360) + 20
	);

	useEffect(() => {
		const VELOCITY = 1;
		const TIMER = { begin: 0, end: 0 };
		const animate = function (progress: number) {
			if (TIMER.begin === 0) {
				TIMER.begin = progress;
			}

			TIMER.end = progress;
			const duration = progress - TIMER.begin;
			if (duration > 0 && duration > 100) {
				setPosition((pos) => {
					const newX = pos.x + d.current.x * VELOCITY;
					const newY = pos.y + d.current.y * VELOCITY;

					if (newX < 0 || newX + 150 * scale >= window.innerWidth) {
						d.current.x = -d.current.x;
					}

					if (newY < 0 || newY + 150 * scale >= window.innerHeight) {
						d.current.y = -d.current.y;
					}
					return {
						x: pos.x + d.current.x * VELOCITY,
						y: pos.y + d.current.y * VELOCITY,
					};
				});

				setRotate((r) => (r + VELOCITY) % 360);
				TIMER.begin = progress;
			}

			animId.current = requestAnimationFrame(animate);
		};
		animId.current = requestAnimationFrame(animate);
		return () => {
			if (animId.current !== null) cancelAnimationFrame(animId.current);
		};
	}, [scale]);

	return (
		<div
			data-id={id}
			style={{
				opacity: 0.3,
				background: "black",
				width: `${150 * scale}px`,
				height: `${150 * scale}px`,
				transform: `translateX(${_position.x}px) translateY(${_position.y}px) rotate(${rotate}deg)`,
			}}
			className={clsx(
				"animate-appear transition-transform",
				"absolute top-0 left-0",
				"border-2 border-slate-400 rounded-xl",
				"shadow-[0_0_8px_#fff,inset_0_0_8px_#fff,0_0_16px_black,inset_0_0_16px_black,0_0_22px_black,inset_0_0_32px_black]"
			)}
		/>
	);
}

type SquareListProps = {
	data: SquareData[];
};

function SquareList({ data }: SquareListProps) {

	return (
		<div className="w-full h-full absolute z-40 top-0 left-0 opacity-25">
			{data.map((squareData) => {
				return (
					<SquareItem
						id={squareData.id}
						key={`square-${squareData.id}`}
						scale={squareData.scale}
						position={squareData.position}
					/>
				);
			})}
		</div>
	);
}

class Square {
	static Item: typeof SquareItem;
	static List: typeof SquareList;
}

Square.Item = SquareItem;
Square.List = SquareList;

export default Square;
