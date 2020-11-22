import { createApp, h } from 'vue'
import Content from './components/Content.vue'
import ContactUs from './components/ContactUs.vue'
const routes = {
  '/': Content,
  '/contact': ContactUs
}

const SimpleRouterApp = {
    data: () => ({
      currentRoute: window.location.pathname
    }),
  
    computed: {
      ViewComponent () {
        const matchingPage = routes[this.currentRoute].name  || '404'
        return require(`./components/${matchingPage}.vue`).default
      }
    },
  
    render () {
      return h(this.ViewComponent)
    },
  
    created () {
      window.addEventListener('popstate', () => {
        this.currentRoute = window.location.pathname
      })
    }
  }
createApp(SimpleRouterApp).mount('#app')
