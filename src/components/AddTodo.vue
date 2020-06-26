<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="textItem" name="textItem" placeholder="AddTodo...">
      <input type="submit" value="submit">
    </form>
  </div>
</template>

<script>

import { v4 as uuidv4 } from 'uuid'

export default {
    name: 'AddTodo',
    data(){
      return{
        textItem: ""
      }
    },
    methods:{
      addTodo(){
        const newTodo = {
          id: uuidv4(),
          title: this.textItem,
          completed: false,
          show: true
        }
        this.$emit('add-todo', newTodo)
        this.textItem = ""
      }
    }
}
</script>

<style scoped>

  form{
    display: flex;
    justify-content: center;
    margin: 30px auto 1rem auto; 
    max-width: 1000px;
    width: 95%;
  }

  form input[type="text"]{
    padding: 5px;
    font-size: 1.8rem;
    width: 80%;
    outline: none;
    border: solid 2px transparent;
    margin-right: 10px;
    padding: 10px;
  }

  form input[type="text"]:focus{
    border: solid 2px #172A40;
  }

  form input[type="submit"]{
    padding: 10px 20px;
    outline: none;
    border: none;
    background: #36495E;
    color: #fff;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
    width: 20%;
  }

  form input[type="submit"]:hover{
    background: #2D3D4E;
  }

  @media (max-width: 600px){
    form{
      flex-direction: column;
      align-items: center;
      margin-bottom: .5rem;
    }

    form input[type="text"]{
      width: 95%;
      margin-bottom: 10px;
      margin-right: 0;
      font-size: 1.2rem;
    }

    form input[type="submit"]{
      width: 95%;
      font-size: 1rem;
    }
  }

</style>