import nav from './nav'
import { footer } from './footer'
import makeButton from './button'
import {makeColorStyle} from './button-styles'
import imageUrl from './webpack-logo.jpg'

import button from './button.css'

// import {createImage} from './create-image'
import createImage from './create-image'

const button1 = makeButton('Yeap A Button')
button1.style = makeColorStyle('red')
document.body.appendChild(button1)

console.log(imageUrl)
const image = createImage(imageUrl)
document.body.appendChild(image)

document.body.appendChild(footer)