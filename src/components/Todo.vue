<template>
    <div>
        <div :key="todo.id" v-for="todo in todos">
            <TodoList v-on:del-item="$emit('del-item', todo.id)" :todo="todo" >{{todo.title}}</TodoList>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Todo',
    props: ['todos']
}
</script>
