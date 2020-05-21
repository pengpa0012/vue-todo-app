import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Todo from '@/components/Todo.vue'
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import todoHeader from '@/components/todoHeader.vue'
import delDoneList from '@/components/delDoneList.vue'

Vue.component('Todo', Todo)
Vue.component('TodoList', TodoList)
Vue.component('AddTodo', AddTodo)
Vue.component('todoHeader', todoHeader)
Vue.component('delDoneList', delDoneList)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
