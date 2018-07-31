import nav from './nav'

import makeButton from './button'
import {makeColorStyle} from './button-styles'
import imageUrl from './webpack-logo.jpg'

import button from './button.css'

// import {createImage} from './create-image'
import createImage from './create-image'

// import { footer } from './footer'
const loadFooter = () => import('./footer')// Lazy loading footer configured

const button1 = makeButton('Yeap A Button')
button1.style = makeColorStyle('red')
document.body.appendChild(button1)

const image = createImage(imageUrl)
document.body.appendChild(image)

button1.addEventListener('click', (event) => {
	loadFooter('./footer')
		.then((fm) => {
			console.log(fm.footer)
			document.body.appendChild(fm.footer)
		})
})
