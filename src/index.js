import { MENU } from './menu'
import { HashRouter } from './HashRouter'
import { HistoryRouter } from './HistoryRouter'

class JRouter {
  constructor({ mode = 'hash', menu, page }) {
    this.router = mode === 'hash' ? new HashRouter(menu, page) : new HistoryRouter(menu, page)
    document.querySelector('.Jrouter').addEventListener('click', e => {
      const { url } = e.target.dataset
      if (url) {
        url.includes('/') ? this.push(url) : this.go(url)
      }
    })
  }

  push(path) {
    this.router.push(path)
  }
  replace(path) {
    this.router.replace(path)
  }
  go(num) {
    this.router.go(num)
  }

}

new JRouter({
  mode: 'hash', // hash/history
  menu: MENU, 
  page: '#Jpage',
  router: '.Jrouter'
})

// const webRouter = new HashRouter(ROUTELIST,'#Jpage','.Jrouter')
