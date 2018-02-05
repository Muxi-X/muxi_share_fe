import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import view from './components/view'


Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: {
		color: '#2296f3',
	  hue: 200
	},
  accent: {
		color: '#2296f3',
	  hue: 500
	},
  warn: {
		color: '#2296f3',
	  hue: 100
	},
  background: 'white'
})

new Vue({
	el: '#view',
	render: h => h(view)
})
