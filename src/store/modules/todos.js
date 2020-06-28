import axios from 'axios'

const state = {
    todos: [
        
    ]
}

const getters = {
    allTodos: (state) => {
        return state.todos
    }
}

const actions = {
    async fetchTodos({ commit }){
        const reponse = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')

        commit('SET_TODO', reponse.data)
    },

    addTodo({ commit }, title){
        commit('ADD_TODO', title)
    },

    delTodo({ commit }, id){
        
        commit('DEL_TODO', id)
    }
}

const mutations = {
    ADD_TODO(state, todo){
        state.todos.unshift(todo)
    },
    DEL_TODO(state, id){
        if(confirm('are you sure?')){
            state.todos = state.todos.filter(todo => todo.id !== id)
        }           
    },
    SET_TODO(state, todos){
        state.todos = todos
    }
}


export default{
    state,
    getters,
    actions,
    mutations
}
