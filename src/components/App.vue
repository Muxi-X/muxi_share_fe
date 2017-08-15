<template>
    <div id="app" :class="$style.app">
        <h1>Todo List</h1>
        <input class="$style.input" type="text" v-model="inputVaule" v-on:keyup.enter="add"/>
        <button v-on:click="add" class="$style.button">add your plan</button>
        <show :todos="this.todos"></show>
    </div>
</template>


<script>
import show from './show.vue';
export default {
    // name: 'app',

    data() {
      return{
        todos:[
          {text: '1', completed: true},
          {text: '2', completed: false}
        ],
        inputVaule: "",
        id: 0

    }},
    components:{
      'show':show
    },
    methods: {
      add: function(){
        this.todos.push({text:this.inputVaule});
        this.inputVaule = '';
        this.id++;
      },
      removeTodo: function(todo){
        this.todos.splice(this.todos.indexOf(todo), 1)
      }
    }
}

</script>
<style lang="scss" module>
.app {
    margin: 0;
}
.foo {
    margin-top: 180px;
}
</style>
