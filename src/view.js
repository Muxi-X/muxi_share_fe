import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import view from './components/view'


Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: {
		color: 'cyan',
	  hue: 200
	},
  accent: {
		color: 'cyan',
	  hue: 500
	},
  warn: {
		color: 'white',
	  hue: 500
	},
  background: 'white'
})

new Vue({
	el: '#view',
	render: h => h(view)
})
