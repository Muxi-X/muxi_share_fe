<template>
    <div>
      <ol>
        <li v-for="todo in todos">
        <div class="$style.liDiv">
          <input type="checkbox" v-model="todo.completed">
          <label v-bind:class="{complete:todo.completed}"> {{ todo.text }} </label>
          <button v-on:click="removeTodo(todo)" class="$style.button"> x </button>
        </div>
        </li>
      </ol>
    </div>
</template>


<script>

export default {
    name: 'show',

    data() {
      return{
        // todos:[
        //   {text: '1', completed: true},
        //   {text: '2', completed: false}
        // ],
        // inputVaule: "",
        // id:0
    }
  },
    props:['todos'],
    methods: {

      removeTodo: function(todo){
        this.todos.splice(this.todos.indexOf(todo), 1)
      }
    }
}

</script>
<style lang="scss" module>
</style>
