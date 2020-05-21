<template>
    <div>
        <button @click="$emit('del-all')">Delete all done items</button>
    </div>
</template>

<style scoped>
    button{
        margin-top: 30px;
        margin-bottom: 5rem;
        padding: 10px 20px;
        outline: none;
        border: none;
        background: #aa3232;
        color: #fff;
        font-size: 1.2rem;
        cursor: pointer;
    }

    button:hover{
        background: #882828;
    }

    @media (max-width: 600px){
        button{
            font-size: .9rem;
            margin-bottom: 1.5rem;
        }      
    }
</style>