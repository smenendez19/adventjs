function fitsInOneBox(boxes) {
	return boxes.every(({ l, w, h }, i) => {
		if (i == boxes.length - 1) return true
		const nextBox = boxes[i + 1] || {}
		return (l > nextBox.l &&
			w > nextBox.w &&
			h > nextBox.h) ||
			(nextBox.l > l &&
				nextBox.w > w &&
				nextBox.h > h)
	})
}