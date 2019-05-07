<template>
    <div class="rezervare" v-bind:class="{'eRezervat':rezervare.rezervat}">
        <p>
        <input type="checkbox" v-on:change="markRezervat">
        {{rezervare.sport}}
        <button @click="$emit('del-rezervare', rezervare.id)" class="del">x</button>
        </p>
        
    </div>
</template>


<script>

export default{
    name: "Rezervare",
    props: ["rezervare"],
    methods: {
        markRezervat(){
            this.rezervare.rezervat =! this.rezervare.rezervat;
        }
    }
}
</script>

<style scoped>
.rezervare{
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}

.eRezervat{
    text-decoration: line-through;
}

.del{
    background: #ff0000;
    color: #fff;
    border:none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
}
</style>
