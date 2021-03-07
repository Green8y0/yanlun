<template>
    <div class="all">
    	<router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data(){
            return{
                email:'',
                password:'',
                batcheler:'',
                dreamedmaster:''
            }
        }
    }
</script>

<style scoped>
    .all{
        min-width: 100%;
        min-height: 100%;
        position: absolute;
    }
</style>