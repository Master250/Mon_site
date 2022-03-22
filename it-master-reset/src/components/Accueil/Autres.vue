<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"   
      hide-default-footer   
    >
      <template >
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.name"
            cols="16"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
              </v-card-title>

              <v-divider></v-divider>

              <v-list two-line class="">
                <v-list-item>
                  <v-list-item-content>{{item.content}}</v-list-item-content>
                </v-list-item>                          
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      itemsPerPage: null,
      
      items: [
        {
          name: 'Besoin d\'une réparation ?',content:"Vous cherchez un technicien afin de résoudre une panne sur votre appareil ? Nous traitons tous les problèmes que peuvent rencontrer les téléphones, les ordinateurs et les tablettes. Changement d’écran, remplacement de batterie, sauvegarde des données etc : retrouvez l’ensemble de nos prestations sur notre grille tarifaire. N’hésitez pas à nous contacter en ligne ou directement par téléphone pour plus d’informations"
        },
        {
          name: 'Nos services', content:'Master-Réparation,le spécialiste à Toulouse de la réparation de téléphones portables "iphone,Samsung Galaxy, Blackberry..." du dépannage de tablettes tactiles "ipad,Galaxy Tab..." et d\'iPod.Nos réparateurs professionnels dépannent également tous les ordinateurs portables et ordinateurs fixes.Master-Réparation, c\'est aussi la réparation et le flash de consoles de jeux (console Microsoft XBox 360, consoles Nintendo, consoles Sony).'
          
        },
        {
          name: 'Nos engagements',content:'La qualité du service : Notre magasin Master-Réparation à Toulouse est un centre expert en réparation de téléphones portables, tablettes tactiles, ordinateurs portables et ordinateurs de bureau, consoles de jeux, iPod dans la Haute-Garonne (31) avec des techniciens qualifiés.La rapidité du service : Nous prenons en charge votre matériel dès votre arrivé au magasin et la plupart de nos réparations sont immédiates.La garantie du service : Toutes nos réparations sont garanties 1 an.La clarté du service : Dès la prise en charge, nous vous fournirons un devis gratuit et ferme'
          
        },
       
      ],
     
    }),
  }
</script>





<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
  <div v-for="imag in images"
    :key="imag">
    <v-img 
    :src= imag.src
    height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
    </div>
  </v-card>
</template>

<script>
  export default {
    data: () => ({      
      images: [
        {
          src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",content:"Vous cherchez un technicien afin de résoudre une panne sur votre appareil ? Nous traitons tous les problèmes que peuvent rencontrer les téléphones, les ordinateurs et les tablettes. Changement d’écran, remplacement de batterie, sauvegarde des données etc : retrouvez l’ensemble de nos prestations sur notre grille tarifaire. N’hésitez pas à nous contacter en ligne ou directement par téléphone pour plus d’informations"
        },
        {
        
        }      
      ],
      show: false,
    }),
  }
</script>