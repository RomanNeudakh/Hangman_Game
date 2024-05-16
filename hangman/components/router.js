export class Router {
    constructor(linkArray, renderGamePageFunc, renderRecordsPageFunc, renderMainPageFunc) {
        this.routes = {
            '/Hangman_Game/main': {
              linkLabel: '/Hangman_Game/main',
              content: renderMainPageFunc
            },
            '/Hangman_Game/': {
              linkLabel: 'Game',
              content: renderGamePageFunc
            },
            '/Hangman_Game/records': {
              linkLabel: 'Records',
              content: renderRecordsPageFunc,
            },
        };
        this.linkArray = linkArray
        this.registerBrowserBackAndForth()
        console.log(this.linkArray)
    }
    registerNavLinks = () => {
        this.linkArray.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(e.target.href)
                const { href } = e.target.href;
                history.pushState({}, "", href);
                this.renderContent(e.target.pathname)
                const route = e.target.pathname;
                history.pushState({}, "", route);
            });
        });
    };
    registerBrowserBackAndForth = () => {
        window.onpopstate = () => {
          const route = location.pathname;
          this.renderContent(route);
        };
    };
    renderInitialPage (route) {
        console.log(route)
        this.renderContent(route);
    };
    renderContent(route) {
        this.routes[route].content()
    }

}

