import Vue from 'vue'
import App from './components/App'

new Vue({
	el: '#app',
	render: h => h(App),
	data: {
		todos:[
			{text:'1', completed:true},
			{text:'2', completed:false}
		],
		inputVaule:''

		},
	methods:{
		add: function(){
			this.todos.push({text: this.inputVaule});
			this.inputVaule='';
		},
		removeTodo: function(){
			this.todos.splice(this.todos.indexOf(todo), 1)
		}
	}
})
