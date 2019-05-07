<template>
    <div>
        <form @submit="addRezervare">
            <input type="text" v-model="name" name="name" placeholder="Nume">
            <ul>
            <br>
            Alege sportul: 
            <br>
            <input type="radio" v-model="sport" name="sport" value="bascket" checked> Bascket<br>
            <input type="radio" v-model="sport" name="sport" value="fotbal"> Fotbal<br>
            <input type="radio" v-model="sport" name="sport" value="tennis"> Tennis <br>
            </ul>
            <br>
            Alege data si ora:
            <dateAndTime>
            <input type="date" v-model="dataOra" name="dataOra">
            <select>
                    <option value="timeSlot1">8-10</option>
                    <option value="timeSlot2">10-12</option>
                    <option value="timeSlot3">12-14</option>
                    <option value="timeSlot4">14-16</option>
                    <option value="timeSlot5">16-18</option>
                    <option value="timeSlot6">18-20</option>
                    <option value="timeSlot7">20-22</option>
                    
            </select>
            </dateAndTime>
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>

import uuid from 'uuid'
export default {
    name: "AddRezervare",
    data(){
        return {
            name:'',
            sport:'',
            dataOra:''

        }
    },

    methods: {
        addRezervare(){
            const newRezervare ={
                id: uuid.v4(),
                name: this.name,
                sport:this.sport,
                dataOra:this.dataOra

            }
            //mai am de lucru
        }
    }
}
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    margin-left:300px;
    margin-right: 300px;
    margin-top: 20px;
    padding:15px;
    background-color:gainsboro;
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
