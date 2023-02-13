import Vue from 'vue'
import App from './App.vue'
import VueGallerySlideshow from 'vue-gallery-slideshow'

import styles from './styles/main.scss'

Vue.config.productionTip = false;
Vue.component('vue-gallery-slideshow', VueGallerySlideshow);

new Vue({
  render: h => h(App),
}).$mount('#app')
