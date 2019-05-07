<template>
<div class="bg">
  <div id="app">
     <Header />
     <AddRezervare />
      <!-- <Rezervari v-bind:rezervari="rezervari" v-on:del-rezervare="deleteRezervare"/>-->
      <Rezervari />
  </div>
</div>
</template> 

<!--datele din formular sa fie impachetate intr-un json care va fi trimis la serverul de functionalitate
  curl ->
 -->

<script>
export default {

}
</script>

<style>

</style>


<script>
import Header from '../components/layout/Header.vue';
import Rezervari from '../components/Rezervari.vue';
import AddRezervare from '../components/AddRezervare.vue';
export default {
  name: 'app',
  components: {
    Rezervari,
    Header,
    AddRezervare
  },

  data(){
    return {
      rezervari:[
        {
          id:1,
          date: 25.04,
          time: {14:16},
          sport: "footbal",
          rezervat: false,
          name: "Joni"
        },
         {
          id:2,
          date: 25.04,
          time: {16:18},
          sport: "footbal",
          rezervat: false,
          name:"Messi"
        },
         {
          id:3,
          dataOra: 25,
          sport: "tennis",
          rezervat: false,
          name:"Panseluta"
        }
      ]

    }
  },

  methods:{
    deleteRezervare(id){
      this.rezervari=this.rezervari.filter(rezervare => rezervare.id != id)
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
