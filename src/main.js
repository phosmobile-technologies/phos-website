// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueAnimate from 'vue-animate-scroll'
import VueTyperPlugin from "vue-typer"

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(VueAnimate)
  Vue.use(VueTyperPlugin)
  Vue.component('Layout', DefaultLayout)
}
