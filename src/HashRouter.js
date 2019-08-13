import BaseRouter from './BaseRouter'

export class HashRouter extends BaseRouter {
  constructor(list, page) {
    super(list, page)
    this.handler()
    window.addEventListener('hashchange', e => {
      this.handler()
    })
  }

  handler() {
    this.render(this.getState())
  }

  getState() {
    const { hash } = window.location
    return hash ? hash.slice(1) : '/'
  }

  push(path) {
    window.location.hash = path
  }

  getUrl(path) {
    const href = window.location.href
    const i = href.includes('#')
    const base = i >= 0 ? href.slice(0, i) : href
    return `${base}#${path}`
  }

  replace(path) {
    window.location.replace(this.getUrl(path))
  }

  go(n) {
    history.go(n)
  }

}