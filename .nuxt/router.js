import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _2235ab59 = () => interopDefault(import('..\\pages\\categorias\\index.vue' /* webpackChunkName: "pages_categorias_index" */))
const _51fe6f10 = () => interopDefault(import('..\\pages\\contacto.vue' /* webpackChunkName: "pages_contacto" */))
const _86b433f0 = () => interopDefault(import('..\\pages\\productos\\index.vue' /* webpackChunkName: "pages_productos_index" */))
const _75de108e = () => interopDefault(import('..\\pages\\categorias\\crear.vue' /* webpackChunkName: "pages_categorias_crear" */))
const _104e4b3d = () => interopDefault(import('..\\pages\\productos\\crear.vue' /* webpackChunkName: "pages_productos_crear" */))
const _4fa1a20e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/categorias",
      component: _2235ab59,
      name: "categorias"
    }, {
      path: "/contacto",
      component: _51fe6f10,
      name: "contacto"
    }, {
      path: "/productos",
      component: _86b433f0,
      name: "productos"
    }, {
      path: "/categorias/crear",
      component: _75de108e,
      name: "categorias-crear"
    }, {
      path: "/productos/crear",
      component: _104e4b3d,
      name: "productos-crear"
    }, {
      path: "/",
      component: _4fa1a20e,
      name: "index"
    }],

    fallback: false
  })
}
