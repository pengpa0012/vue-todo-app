<template>
 <div class="flex todo-item" >
    <div class="flex">
      <input type="checkbox" @change="checkList" :class="{'is-checked': todo.completed}">
      <h3 :class="{'is-completed': todo.completed}">{{ todo.title }}</h3>
    </div>
    <button @click="$emit('del-item', todo.id)" class="delBtn">&times;</button>
  </div>
</template>

<script>
export default {
    name: 'TodoList',
    props: ['todo'],
    methods: {
      checkList(){
        this.todo.completed = !this.todo.completed
      }
    }
}
</script>

<style scoped>
  .todo-item{
    background: #f4f4f4;
    border: solid 2px #3a3a3a;
    border-radius: 5px;
    margin: 20px 5px;
    padding-left: 10px;
    justify-content: space-between;
  }

  input{
    appearance: none;
    border: solid 1px #000;
    outline: none;
    border-radius: 50%;
    padding: 8px;
    cursor: pointer;
    margin-right: 10px;
  }

  .is-checked{
    background: #52f34d;
  }

  h3{
    font-size: 1.3rem;
  }

  .flex{
    display: flex;
    align-items: center;
  }

  .is-completed{
    text-decoration: line-through;
    color: #999999;
  }

  .delBtn{
    padding: 5px 15px;
    background: #172A40;
    color: #fff;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 2rem;
    font-weight: bold;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-left: solid 2px #3a3a3a;
  }

  .delBtn:hover{
    background: #aa3232;
  }

  @media (max-width: 600px){
    h3{
      font-size: 1.1rem;
    }
  }

</style>