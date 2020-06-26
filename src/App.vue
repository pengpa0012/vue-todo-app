<template>
  <div id="app">
    <div class="content">
      <todoHeader />
      <AddTodo v-on:add-todo="addTodo" />
      <delDoneList v-on:del-all="delAll" />
      <Todo v-on:del-item="delTodo" :todos="todos" />
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data(){
    return{
      todos:[
        
      ]
    }
  },
  methods: {
    delTodo(id){
      if(confirm('are you sure?')){
         axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`) 
          .then(this.todos = this.todos.filter(todo => todo.id !== id)) 
          .catch(err => console.log(err))
      }  
    },
    addTodo(newTodo){
      if(newTodo.title === "") return
 
      this.todos = [...this.todos, newTodo]  
      console.log(this.todos.length)      
    },
    delAll(){

      if(confirm('are you sure?')){
        this.todos = this.todos.filter(todo => todo.completed == false)
      }
    }
  }
}
</script>

<style>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #36495E;
  background: linear-gradient(to right, #4BBB7E, #81CF6B);
  text-align: center;
  min-height: 100vh;
}

.content{
  margin: auto;
}

@media (max-width: 660px){
  h1{
     font-size: 3rem !important;
     padding-right: 0;
     padding-left: 0;
  }

  .content{
    width: 100%;
  }
}

</style>
