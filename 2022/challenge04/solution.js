function fitsInOneBox(boxes) {
	return boxes
	.sort((a, b) => (a.l * a.w * a.h) - (b.l * b.w * b.h))
	.every(({ l, w, h }, i) => {
		const nextBox = boxes[i + 1] || null
		return (
			nextBox === null ||
			l > nextBox.l && w > nextBox.w && h > nextBox.h) ||
			l < nextBox.l && w < nextBox.w && h < nextBox.h
		})
}

console.log(fitsInOneBox([
	{ l: 1, w: 1, h: 1 },
	{ l: 2, w: 2, h: 2 }
]))

console.log(fitsInOneBox([
	{ l: 1, w: 1, h: 10 },
	{ l: 3, w: 3, h: 12 },
	{ l: 2, w: 2, h: 1 },
]))