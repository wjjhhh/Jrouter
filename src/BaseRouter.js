export default class BaseRouter {
  constructor(list, page) {
    this.list = list
    this.page = document.querySelector(page)

  }

  render(state) {
    let ele = this.list.find(ele => ele.path === state)
    ele = ele ? ele : this.list.find(ele => ele.path === '*')
    this.page.innerText = ele.component
  }
}