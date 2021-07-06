<template>
    <v-app id="accueil" class="text-center">
        <top-header/>
        <h1 >Bienvevue chez IT-Master Reset</h1>     
        
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