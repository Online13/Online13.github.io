
export function gaussFunc(x: number, u = 0, s = 1): number {
	const div = 1 / (s * 2.51);
	const exp = Math.exp(-1 * Math.pow((x - u) / (1.41 * s), 2));
	return exp * div;
}