<script setup lang="ts">
import { useCounterStore } from '../stores/dados';


const usuarioXmen = useCounterStore()


</script>

<template>
  
   
       <div class="h-60 w-screen bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 flex justify-center items-center">
        
            <img class="mt-4 w-52 h-52 object-contain" :src="usuarioXmen.imgPersonagem" >
       </div>

       
</template>

<style lang="scss" scoped>

</style>