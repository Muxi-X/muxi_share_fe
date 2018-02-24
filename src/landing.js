import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Landing from './components/landing'


Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: {
		color: '#2296f3',
	  hue: 900
	},
  accent: {
		color: 'white',
	  hue: 500
	},
  warn: {
		color: 'blue',
	  hue: 500
	},
  background: 'white'
})

new Vue({
	el: '#landing',
	render: h => h(Landing)
})
