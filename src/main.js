import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Todo from '@/components/Todo.vue'
import AddTodo from '@/components/AddTodo.vue'
import TodoHeader from '@/components/TodoHeader.vue'
import store from '@/store'

Vue.component('Todo', Todo)
Vue.component('AddTodo', AddTodo)
Vue.component('TodoHeader', TodoHeader)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
