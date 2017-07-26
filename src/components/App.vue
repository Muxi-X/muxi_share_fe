<template>
    <div id="app" :class="$style.app">
        <h1>Todo List</h1>
        <input class="$style.input" type="text" v-model="inputVaule" v-on:keyup.enter="add"/>
        <button v-on:click="add" class="$style.button">add your plan</button>
        <ol >
          <li v-for="todo in todos" >
          <div class="$style.liDiv">
            <input type="checkbox" v-model="todo.completed">
            <label v-bind:class="{complete:todo.completed}"> {{ todo.text }} </label>
            <button v-on:click="remove" class="$style.button"> x </button>
          </div>
          </li>
        </ol>
    </div>
</template>


<script>

export default {
    name: 'app',

    data: {
      todos:[
        {text:'1', completed:true},
        {text:'2', completed:false}
      ],
      inputVaule:""
    },

    methods: {
      add :function(){
        this.todos.push({text: this.inputVaule});
        this.inputVaule="";
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
