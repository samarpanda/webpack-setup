module.exports = ({mode}) => {
	console.log(mode)
	return {
		mode,
		output: {
			filename: 'bundle.js'
		}	
	}
}