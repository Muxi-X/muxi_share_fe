import Vue from 'vue'
import Second from './components/Second'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

new Vue({
	el: '#app',
	render: h => h(Second)
})
