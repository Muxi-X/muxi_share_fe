<template>
    <div id="app" :class="$style.app">
        <h2> {{ message }} </h2>
        <img src="../assets/muxi_logo.png" alt="muxi_logo">
        <a href="https://github.com/Muxi-Studio/ninja">
      github
    </a>
        <a href="http://muxistudio.com/">
      @Muxi-Studio
    </a>
    <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            message: 'Hello Ninja!',
            todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个项目' }
    ]
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
