<script setup lang="ts">
import { useCounterStore } from '../stores/dados';


const usuarioXmen = useCounterStore()
</script>

<template>
    
       <div class="w-screen h-36 bg-gradient-to-r from-gray-700 via-gray-900 to-black ">
            <div class="grid grid-cols-3 flex justify-center gap-52 p-2" >
                <div>
                    <p class="text-white"><b>Codinome:</b> {{ usuarioXmen.codinomePersonagem }}</p>
                </div>
                <div>
                    <p class="text-white"><b>Nome:</b> {{usuarioXmen.nomePersonagem  }}</p>
                </div>
                <div>
                    <p class="text-white"><b>Habilidades:</b> {{ usuarioXmen.poderPersonagem }}</p>
                </div>
            </div>
            
       </div>
   
</template>

<style lang="scss" scoped>

</style>