import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './components/App'


Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: {
		color: 'blue',
	  hue: 900
	},
  accent: {
		color: 'blue',
	  hue: 100
	},
  warn: {
		color: 'blue',
	  hue: 800
	},
  background: 'white'
})

new Vue({
	el: '#app',
	render: h => h(App)
})
