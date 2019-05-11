<template>
    <div>
        <form @submit="addRezervare">
            <input type="text" v-model="name" name="name" value="name" placeholder="Nume">
            <ul>
            <br>
            Alege sportul: 
            <br>
            <input type="radio" v-model="sport" name="sport" value="bascket" checked> Bascket<br>
            <input type="radio" v-model="sport" name="sport" value="fotbal"> Fotbal<br>
            <input type="radio" v-model="sport" name="sport" value="tennis"> Tennis <br>
            </ul>
            <br>
            Alege data:
            
            <input type="date" v-model="data" name="data" value="data">
            Alege ora:
            <select v-model="ora" name="ora" value="ora">
                    <option value="8-10">8-10</option>
                    <option value="10-12">10-12</option>
                    <option value="12-14">12-14</option>
                    <option value="14-16">14-16</option>
                    <option value="16-18">16-18</option>
                    <option value="18-20">18-20</option>
                    <option value="20-22">20-22</option>
                    
            </select>
    
            <button v-on:click.prevent="post"> Rezerva </button>
            
           
        </form>
    </div>
</template>

<script>
import uuid from 'uuid'
import axios from 'axios';

export default {
    name: "AddRezervare",
    data(){
        return {
            name:'',
            sport:'',
            data:'',
            ora:''
        }
    },

    methods: {
        addRezervare(){
            
            const newRezervare ={
                id: uuid.v4(),
                name: this.name,
                sport:this.sport,
                data:this.data,
                ora:this.ora

            }
            //mai am de lucru
        
        },
        post: function(){
            this.$http.post('http://localhost:1337/rezervari.build/api/rezervare',{
                date:this.data,
                time_slot:this.ora,
                sport:this.sport
            }).then(function(data){
                console.log(data);
            })

        }
    }
}
</script>

<style scoped>
form{/*
    display: flex;
    flex-direction: column;
    margin-left:300px;
    margin-right: 300px;
    margin-top: 20px;
    padding:15px;
    background-color:gainsboro;*/
    width: 500px;
    height: 400px;
    border: 1px solid #CCCCCC;
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 35px 35px #010f48;
    margin: auto;
    margin-top: 75px;
    padding: 20px;
}

dateAndTime{
    display: flex;
}

input[type="text"]{
    flex:10;
    padding: 5px;
}

input[type="submit"]{
    flex:2;
}
</style>
