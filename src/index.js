import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './components/App'


Vue.use(VueMaterial)


Vue.material.registerTheme('default', {
  primary: {
		color: 'cyan',
	  hue: 200
	},
  accent: {
		color: 'cyan',
	  hue: 100
	},
  warn: {
		color: 'white',
	  hue: 500
	},
  background: 'orange'
})

new Vue({
	el: '#app',
	render: h => h(App)
})
