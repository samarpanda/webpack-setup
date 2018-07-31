const createImage = (url, height=100, width=100) => {
	const imgEl = document.createElement('img')
	imgEl.src = url
	imgEl.height = height
	imgEl.width = width
	return imgEl
}

// export {createImage}
export default createImage