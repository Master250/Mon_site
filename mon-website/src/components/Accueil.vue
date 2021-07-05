<template>
    <v-app id="accueil" class="text-center">
        <top-header/>
        <h1 >Bienvevue chez IT-Master reset</h1>       
        
        <router-view></router-view>
         
    </v-app>
</template>
<script>
import Header from "./Accueil/Header"

export default {
    name: "Accueil",
    data(){
        return{
            
        }
    },
    components: {
        "top-header": Header,
    },
}
</script>