<template>
    <div class="todos-container">
        <div class="todo-legend">
            <span>Click to mark done</span>
            <div class="legend flex">
                <span class="flex">
                    <div class="legend-complete box"></div>
                    = done
                </span>
                <span class="flex">
                    <div class="legend-incomplete box"></div>
                    = not done
                </span>
            </div>
         </div>
        <div class="todos-grid">       
            <div    
                :key="todo.id" 
                v-for="todo in allTodos">
            <div class="todo-item" @click="markDone(todo)" >
                <div class="todo-head" :class="{'is-complete': todo.completed}">
                        <button @click="delItem(todo.id)" class="delBtn" :class="{'is-del': todo.completed}">&times;</button>
                </div>            
                    <div class="todo-title">             
                        <h3 :class="{'is-done': todo.completed}">{{ todo.title }}</h3>
                    </div>          
                </div>
            </div>
        </div>    
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Todo',
    methods: {
        markDone(todo){
            todo.completed = !todo.completed
        },
        ...mapActions(['delTodo', 'fetchTodos']),
        delItem(id){
           this.delTodo(id)
       }

    },
    computed: {
        ...mapGetters(['allTodos'])
    },
    created(){
        this.fetchTodos()
    }
}
</script>

<style scoped>

    .flex{
        display: flex;
        align-items: center;
    }

    .todos-grid{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
    }

    .todo-legend{
        margin-bottom: 5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .todo-item{
        box-shadow: 
            0 5px 2px 0 rgba(0,0,0,.1),
            0 2px 5px 0 rgba(0,0,0,.2);
        margin: 20px;
        min-height: 300px;
        position: relative;
        word-break: break-all;
    }

    .todo-head{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 2rem 1rem;
        background: #172A40;
    }

    .box{
        width: 15px;
        height: 15px;
        margin: 0 10px;
    }

    .legend-complete{
        background: #8BBE48;
    }

    .legend-incomplete{
        background: #172A40;
    }

    .todo-title{
        margin: 2rem;
    }

    .is-complete{
        background: #8BBE48;
    }

    .is-done{
        text-decoration: line-through;
        color: #999999;
    }

    .is-del{
        color: #172A40 !important;
    }

    h3{
        font-size: 1.3rem;
    }

    .delBtn{
        color: #fff;
        border: none;
        cursor: pointer;
        outline: none;
        background: transparent;
        font-weight: bold;
        font-size: 2rem;
    }

    @media (max-width: 1176px){
        .todos-grid{
            grid-template-columns: repeat(2, 1fr);
        }    
    }

    @media (max-width: 600px){

        .todo-item{
            min-height: 200px;
        }
        .todo-head{
            padding: 1rem .5rem;
        }

        .todos-grid{
            grid-template-columns: repeat(1, 1fr);
        } 

        
        .todo-legend{
           flex-direction: column;
        }

        h3{
            font-size: .9rem;
        }

        .delBtn{
            padding: 0px 15px;
        }
    }
</style>
