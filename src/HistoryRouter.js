import BaseRouter from './BaseRouter'

export class HistoryRouter extends BaseRouter {
  constructor(list, page) {
    super(list, page)
    this.handler()
    window.addEventListener('popstate', e => {
      this.handler()
    })
  }

  handler() {
    this.render(this.getState())
  }

  getState() {
    const { pathname } = window.location
    return pathname ? pathname : '/'
  }

  push(path) {
    history.pushState(null, null, path)
    this.handler()
  }

  replace(path) {
    history.replaceState(null, null, path)
    this.handler()
  }

  go(n) {
    history.go(n)
  }
  
}