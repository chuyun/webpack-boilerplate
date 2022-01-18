// Test import of a JavaScript module
import { example } from '@/assets/js/example'

import {APP_NAME} from '@/version'

// Test import of an asset
import webpackLogo from '@/assets/images/webpack-logo.svg'

// Test import of styles
import '@/assets/styles/index.scss'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()


// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Test a public folder asset
const imagePublic = document.createElement('img')
imagePublic.src = '@/assets/images/example.png'

const ts = document.createElement('div');
ts.textContent = APP_NAME;


const app = document.querySelector('#root')
app.append(logo, heading, imageBackground, imagePublic, ts);
