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
            Alege data si ora:
            
            <input type="date" v-model="data" name="data" value="data">
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
            <!-- <input type="submit" value="Submit" class="btn" > -->
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
            this.$http.post('https://jsonplaceholder.typicode.com/posts',{
                title:this.name,
                body:[this.sport,this.data,this.ora],
                userId:1
            }).then(function(data){
                console.log(data);
            })

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
