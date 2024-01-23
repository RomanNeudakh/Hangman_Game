'use strict'
import { Header } from './components/header_component.js';
import { Footer } from './components/footer_component.js';
import { Canvas } from './components/canvas.js'

let bodyNode = document.getElementById('body')


let headerClass = new Header(bodyNode)
headerClass.linkInit()
let main = document.createElement('main');
main.classList.add('main')
bodyNode.appendChild(main)
let footerClass = new Footer(bodyNode)
let header_node = document.querySelector('.header')

let convasContainer = document.createElement('div')
convasContainer.classList.add('convas_container')
main.appendChild(convasContainer)
let canvas = new Canvas(convasContainer)


let button = document.createElement('button')
button.textContent = 'button';
let count = 0
button.addEventListener('click', () => {
    count++
    switch (count) {
        case 1:
            canvas.init();
            break;
        case 2:
            canvas.drowHead();
            break;
        case 3:
            canvas.drowBody();
            break;
        case 4:
            canvas.drowLeftHand();
            break;
        case 5:
            canvas.drowRightHand();
            break;
        case 6:
            canvas.drowLeftFoot();
            break;
        case 7:
            canvas.drowRightFoot();
            break;
        default:
            break;
    }
})
main.appendChild(button)

// let img = document.createElement('img')
// img.src = './assets/JuAug46.svg'
// main.appendChild(img)

