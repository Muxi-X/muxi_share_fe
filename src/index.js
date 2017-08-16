import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './components/App'


Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: {
		color: 'indigo',
	  hue: 700
	},
  accent: {
		color: 'blue',
	  hue: 'A200'
	},
  warn: {
		color: 'indigo',
	  hue: 500,
		text: 'white'
	},
  background: 'white'
})

new Vue({
	el: '#app',
	render: h => h(App)
})
