<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="textItem" name="textItem" placeholder="AddTodo...">
      <input type="submit" value="submit">
    </form>
  </div>
</template>

<script>

import { v4 as uuidv4 } from 'uuid'
import { mapActions } from 'vuex'
export default {
    name: 'AddTodo',
    data(){
      return{
        textItem: ""
      }
    },
    methods:{
      ...mapActions(['addTodo']),
      onSubmit(){
        if(this.textItem === '') return
        const newTodo = {
          id: uuidv4(),
          title: this.textItem,
          completed: false,
          show: true
        }
        this.addTodo(newTodo)
        this.textItem = ""
      }
    }
}
</script>

<style scoped>

  form{
    display: flex;
    justify-content: center;
    margin: 30px auto 5rem auto; 
    max-width: 1000px;
    width: 95%;
  }

  form input[type="text"]{
    padding: 5px;
    font-size: 1.2rem;
    outline: none;
    width: 80%;
    border: solid 1px #868686;
    margin-right: 10px;  
    padding: 10px;
  }

  form input[type="text"]:focus{
    border: solid 1px #172A40;
  }

  form input[type="submit"]{
    padding: 10px 15px;
    outline: none;
    border: none;
    background: #36495E;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
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