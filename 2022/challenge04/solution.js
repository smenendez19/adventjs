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

module.exports = fitsInOneBox