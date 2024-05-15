export class Header {
    constructor(container) {
        this.linkArray = []
        this.mainLink = document.createElement('a')
        this.mainLink.classList.add('main_link')
        this.mainLink.textContent = 'Main'
        this.mainLink.href = '/main'
        this.linkArray.push(this.mainLink)
        this.recordsLink = document.createElement('a')
        this.recordsLink.classList.add('records_link')
        this.recordsLink.textContent = 'Records'
        this.recordsLink.href = '/records'
        this.linkArray.push(this.recordsLink)
        this.gameLink = document.createElement('a')
        this.gameLink.classList.add('game_link')
        this.gameLink.textContent = 'Game'
        this.gameLink.href = '/'
        this.linkArray.push(this.gameLink)
        this.list = document.createElement('ul')
        this.list.classList.add('nav')
        this.headerContainer = document.createElement('div')
        this.headerContainer.classList.add('header_container')
        this.header = document.createElement('header')
        this.header.classList.add('header')
        this.list.appendChild(this.gameLink)
        this.list.appendChild(this.recordsLink)
        this.list.appendChild(this.mainLink)
        this.headerContainer.appendChild(this.list)
        this.header.appendChild(this.headerContainer)
        container.appendChild(this.header)
    }
    linkInit() {
        this.gameLink.addEventListener('click', () => {
            console.log('game')
        })
        this.mainLink.addEventListener('click', () => {
            console.log('main')
        })
        this.recordsLink.addEventListener('click', () => {
            console.log('records')
        })
    }
}
