import { createElement } from '../helpers/create-element.js'


export const Sticky = createElement(
  'tpy-sticky',

  class extends HTMLElement {
    connectedCallback() {
      this.el = this.querySelector(':first-child')

      this.handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
          if(entry.boundingClientRect.y < 1) {
            this.el.classList.add('stuck')
          } else {
            this.el.classList.remove('stuck')
          }
        })
      }

      this.observer = new IntersectionObserver(this.handleIntersect, {
        root: null,
        rootMargin: '-1px 0px 0px 0px',
        threshold: 1
      })

      this.observer.observe(this.el)
    }
  }
)
