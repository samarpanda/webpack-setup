const createButton = (buttonName) => {

	const buttonEle = document.createElement('button')
	buttonEle.innerText = `Button : ${buttonName}`
	return buttonEle;
}

export default createButton