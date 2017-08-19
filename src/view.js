import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import view from './components/view'

Vue.use(VueMaterial)

new Vue({
	el: '#view',
	render: h => h(view)
})
