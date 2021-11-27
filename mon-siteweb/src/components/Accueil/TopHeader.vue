<template>
  <v-card class="overflow-hidden">
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

      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="white"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-tab>{{ item.title }}</v-tab>
          </v-list-item>
        </v-list>
      </v-menu>
      
      <template v-slot:extension >
        <v-tabs fixed-tabs v-model="tab">
          <v-tab v-for ="menu in menus" :key="menu.tab">
            {{menu.tab}} 
          </v-tab>
        </v-tabs>
      </template>
      
    </v-app-bar>
    
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="800"
    >
      <v-container style="height: 1000px;"> </v-container>
      
    </v-sheet>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  
</template>

<script>
  export default {
    name:'TopHeader',
    data (){
        return{
      drawer: false,
      group: null,
      tab: null,
      items: [
        { title: 'A propos' },
        { title: 'Nous contacter' },
        { title: 'Infos' },
      ],
      menus:[
        {tab: 'Nos services'},
        {tab: 'Réparations'},
        {tab: 'Nous cantacter'},
        {tab: 'Adresse'}
      ]
    }
  }
}
</script>