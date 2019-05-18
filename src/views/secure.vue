<template>
<div class="bg">
  <div id="app">
     <Header />
    <!-- <AddRezervare/> -->
       <AddRezervare :user1="user" v-bind:pass1="pass"></AddRezervare> 
    
      <Rezervari />
  </div>
</div>
</template> 

<!--datele din formular sa fie impachetate intr-un json care va fi trimis la serverul de functionalitate
  curl ->
 -->


<script>
import Header from '../components/layout/Header.vue';
import Rezervari from '../components/Rezervari.vue';
import AddRezervare from '../components/AddRezervare.vue';
import router from '../router'

export default {
  name: 'app',
  components: {
    Rezervari,
    Header,
    AddRezervare
  },
  props:["user","pass"],


  data(){
    return {
      user1:'',
      pass1:'',
      /*
      rezervari:[
        {
         /* id:1,
          data: 25.04,
          ora: {14:16},
          sport: "footbal",
          rezervat: false,
          name: "Joni"
        }    
      ]*/
    }
  },

  methods:{
    deleteRezervare(id){
      console.log($route.params.user)
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;

}

.btn{
  display:inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover{
  background: #666;
}
</style>
