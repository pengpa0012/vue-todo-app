<template>
  <div id="app">
    <TodoHeader />
    <AddTodo />
    <Todo/>  
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #36495E;
  text-align: center;
  min-height: 100vh;
  max-width: 1440px;
  margin: auto;
}

h1{
  font-weight: 500 !important;
}

h3{
    font-weight: 400 !important;
}

@media (max-width: 660px){
  #header{
    margin-bottom: 2rem !important;
  }

  h1{
     font-size: 2rem !important;
     padding-right: 0;
     padding-left: 0;
     font-weight: 500;
  }

  

  #app{
    width: 100%;
  }
}
/* add some proper styling */
</style>
