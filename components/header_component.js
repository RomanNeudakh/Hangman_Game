export class Header {
    constructor(container) {
        this.mainLink = document.createElement('li')
        this.mainLink.classList.add('main_link')
        this.mainLink.textContent = 'Main'
        this.recordsLink = document.createElement('li')
        this.recordsLink.classList.add('records_link')
        this.recordsLink.textContent = 'Records'
        this.gameLink = document.createElement('li')
        this.gameLink.classList.add('game_link')
        this.gameLink.textContent = 'Game'
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


export function header_component() {
    return `<header class="header">
                <div class="header_container">
                    <ul class="nav">
                        <li>Main</li>
                        <li>Records</li>
                        <li>Game</li>
                    </ul>
                </div>
            </header>`;
}
