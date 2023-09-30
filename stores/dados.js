import { defineStore } from 'pinia'
import  dadosUser  from '/xmen.json'



export const useCounterStore = defineStore('exibir', {
  //estado do objeto reativo
  state: () => reactive({

      dadosUserXmen : dadosUser,
      nomeXmen: '',
      codinomeXmen: '',
      imgXmen: '',
      poderXmen: '',
      adicionarClasse: ''

    

  }),

  //ações
  actions: {

    selecionarPersonagem(nome,codinome,img,poder) {
      
     console.log('Este é o nome: '+nome);
      //atribui os valores as propriedades
      this.nomeXmen = nome;
      this.codinomeXmen = codinome;
      this.imgXmen = img;
      this.poderXmen = poder;
 
    },
 
    
  },
  //getters carregadas nos components
  getters: {
    nomePersonagem(state){
      if(state.nomeXmen == ''){
        return state.nomeXmen = '-'

      } else {
        return state.nomeXmen;
      }
       
    },
    codinomePersonagem(state){
      if(state.codinomeXmen == ''){
        return state.codinomeXmen = '-'
      } else {
        return state.codinomeXmen;
      }
     
    },
    imgPersonagem(state){

      if(state.imgXmen == ''){
        return state.imgXmen = '../img/default.jpg'
      } else {
        return state.imgXmen
      }
     
    },
    poderPersonagem(state){
      if(state.poderXmen == ''){
        return state.poderXmen = '-'
      } else {
        return state.poderXmen
      }
 
    }

  }
})