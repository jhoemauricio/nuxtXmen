<script setup>
import { useCounterStore } from '../stores/dados';

//Atribui a uma constatnte o useCountStore do Pinia
const usuarioXmen = useCounterStore()
//Atribui a constante a propriedade vinda do state do Pinia
const dadosXmen = usuarioXmen.dadosUserXmen

</script>

<template>



<div class="w-screen h-80 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 flex justify-center items-center">
  <div class="grid grid-cols-7 gap-16">
    <div v-for="user in dadosXmen" class="border-2 hover:border-amber-400 hover:cursor-pointer p-2">
           
          <!--Chama o método da action vindo do storage-->
           <img :src="user.imgCard" class="rounded h-12 w-12"
            @click="usuarioXmen.selecionarPersonagem(user.nome, user.codinome, user.img, user.poder)">
        </div>
  </div>
</div>

</template>