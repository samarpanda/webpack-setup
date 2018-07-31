import nav from './nav'
import { footer } from './footer'
import makeButton from './button'
import {makeColorStyle} from './button-styles'

const button1 = makeButton('Yeap A Button')
button1.style = makeColorStyle('red')

document.body.appendChild(button1)
document.body.appendChild(footer)