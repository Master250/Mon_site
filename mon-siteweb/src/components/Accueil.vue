<template>
    <v-app id="accueil" class="text-center">
        <top-header/>     
        
        <router-view></router-view>
         
    </v-app>
</template>
<script>
import TopHeader from "./Accueil/TopHeader"

export default {
    name: "Accueil",
    data(){
        return{
            
        }
    },
    components: {
        "top-header": TopHeader,
    },
}
</script>