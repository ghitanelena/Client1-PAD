<template>

<div>
    <div v-bind:key="rezervare.id" v-for="rezervare in rezervari">
        <Rezervare v-bind:rezervare="rezervare" v-on:del-rezervare="$emit('del-rezervare',rezervare.id)"/>
     </div>  
</div>
</template>


<script>
import Rezervare from './Rezervare.vue'

export default{
    name:"Rezervari",
    components: {
        Rezervare
    },
    props: ["rezervari"]
}
</script>


<style scooped>

</style>