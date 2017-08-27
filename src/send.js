import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import send from './components/send'


Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: {
		color: 'blue',
	  hue: 900
	},
  accent: {
		color: 'pink',
	  hue: 500
	},
  warn: {
		color: 'blue',
	  hue: 500
	},
  background: 'white'
})

new Vue({
	el: '#send',
	render: h => h(send)
})
