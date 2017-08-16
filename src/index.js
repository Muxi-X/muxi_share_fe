import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './components/App'


Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: {
		color: 'indigo',
	  hue: 700,
	  textcolor: 'red'
	},
  accent: {
		color: 'blue',
	  hue: 600,
	  textcolor: 'red'
	},
  warn: {
		color: 'indigo',
	  hue: 500,
	  textcolor: 'red'
	},
  background: 'white'
})

new Vue({
	el: '#app',
	render: h => h(App)
})
