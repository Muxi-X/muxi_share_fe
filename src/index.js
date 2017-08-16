import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './components/App'


Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'indigo',
  accent: 'deep-orange',
  warn: 'red',
  background: 'white'
})

new Vue({
	el: '#app',
	render: h => h(App)
})
