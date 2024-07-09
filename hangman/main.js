'use strict'
import { Header } from './components/header_component.js';
import { Footer } from './components/footer_component.js';
import { renderGamePage } from './components/gamePage.js';
import { Router } from './components/router.js';
import { renderRecordsPage } from './components/recordsPage.js';
import { renderMainPage } from './components/mainPage.js';
document.addEventListener('DOMContentLoaded', function() {
    console.log('ASDASD')
});
let bodyNode = document.getElementById('body')
let headerClass = new Header(bodyNode)
headerClass.linkInit()
let footerClass = new Footer(bodyNode)
let main = document.createElement('main');
main.classList.add('main')
bodyNode.appendChild(main)


let router = new Router(headerClass.linkArray, renderGamePage, renderRecordsPage, renderMainPage)
router.registerNavLinks()
console.log(window.location.search)
router.renderInitialPage(window.location.pathname)
