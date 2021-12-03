<template>
  <v-card class="overflow-hidden">
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Accueil</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Mon compte</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-title>IT-M.Reset </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="white" v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(point, i) in points" :key="i">
            <v-tab>{{ point.title }}</v-tab>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-row justify="space-around">
          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-tab color="primary" dark v-bind="attrs" v-on="on">
                  Nos services
                </v-tab>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items1" :key="index" link>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>

          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-tab color="primary" dark v-bind="attrs" v-on="on">
                  Réparations
                </v-tab>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items2" :key="index" link>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>

          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-tab color="primary" dark v-bind="attrs" v-on="on">
                  Nous cantacter
                </v-tab>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items3" :key="index" link>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-row>
      </template>
    </v-app-bar>
        
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="700px"
      max-width="auto"
      color="grey lighten-5"
    >
      <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          >
      <v-container style="height: 500px; padding: 250px; width:auto">
        
          <v-row center
          no-gutters
          
          >
            <v-card-title class="font-weight-black"
            style="background: linear-gradient(to right, rgb(255, 200, 0), rgba(255, 0, 0, 0.855), rgb(255, 0, 0)); background-clip: text; -webkit-background-clip: text; color: transparent;">
            Chez IT-Master-Reset c'est la satisfaction totale
            <v-img src="../../assets/repair.png" alt=""
            ></v-img>
            </v-card-title>
            
          </v-row>
            <v-row justify="space-around"
            style="padding:40px">
              <v-btn>
                
              Smartphones
              <v-icon dark >
                  mdi-play
                </v-icon>
              </v-btn>
              <v-btn>
                
                Ordinateurs
                <v-icon dark >
                  mdi-play
                </v-icon> 
              </v-btn>
            </v-row>
          
      </v-container>
      
      <Main/>
      </v-img> 
      <Footer/>
      
    </v-sheet>
    
  </v-card>
  
</template>

<script>
import Main from "./Main"
import Footer from "./Footer.vue"
export default {
  name: "TopHeader",
  components:{
    Main,
    Footer
  },
  data() {
    return {
      drawer: false,
      group: null,
      tab: null,
      points: [
        { title: "A propos" },
        { title: "Nous contacter" },
        { title: "Infos" },
      ],
      items1: [
        { title: "Dépannage" },
        { title: "Assistance" },
        { title: "Accessoires" },
        { title: "Nos Tarifs" },
      ],
      items2: [
        { title: "Téléphone" },
        { title: "PC portable" },
        { title: "PC bureau" },
        { title: "Les tablettes" },
      ],
      items3: [{ title: "Apropos" }],
    };
  },
};
</script>

<style lang="scss">
  .row.no-gutters {
    margin: 0;
    justify-content: center;
    width: 100%;
}

</style>