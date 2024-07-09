export class Footer {
    constructor(container) {
        this.logo = document.createElement('div')
        this.logo.classList.add('logo')
        this.logo.textContent = 'LOGO'
        this.year = document.createElement('div')
        this.year.classList.add('year')
        this.year.textContent = '2024'
        this.footer = document.createElement('footer')
        this.footer.classList.add('footer')
        this.footerContainer = document.createElement('div')
        this.footerContainer.classList.add('footer_container')
        this.footerContainer.appendChild(this.year)
        this.footerContainer.appendChild(this.logo)
        this.footer.appendChild(this.footerContainer)
        container.appendChild(this.footer)
    }

}
