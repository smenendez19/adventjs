// Solution with for of (160)

function fitsInOneBox(boxes) {
	let prevBox = null
	for (const box of boxes) {
	  if (!prevBox) {
		prevBox = box
		continue
	  }
	  if (
		  !(box.l < prevBox.l && 
		  box.w < prevBox.w && 
		  box.h < prevBox.h) &&
		  !(prevBox.l < box.l && 
		  prevBox.w < box.w && 
		  prevBox.h < box.h)
	  ) {
		  return false
	  }
	  prevBox = box
	}
	return true
}

// Solution with every (173)

function fitsInOneBox(boxes) {
	return boxes.every(({l, w, h}, i) => {
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