<template>
  
  <v-card class="mx-auto" max-width="auto" align="center"
  style="margin-bottom:15px">
    <v-row>
      <v-col>
        <v-card max-width="334px">
          <v-img
            src="../../assets/image7.jpg" alt=""
            height="200px"
          >
          </v-img>
          <v-card-title> Réparation de Téléphone mobile </v-card-title>
          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="orange lighten-2" text> Explorer </v-btn>

            <v-btn icon @click="show1 = !show1">
              <v-icon>{{
                show1 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show1">
              <v-divider></v-divider>

              <v-card-text style="text-align:justify">
                Vous cherchez un technicien afin de résoudre une panne sur votre
                appareil ? Nous traitons tous les problèmes que peuvent
                rencontrer les téléphones, les ordinateurs et les tablettes.
                Changement d'écran, remplacement de batterie, sauvegarde des
                données etc : retrouvez l'ensemble de nos prestations sur notre
                grille tarifaire. N'hésitez pas à nous contacter en ligne ou
                directement par téléphone pour plus d’informations
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card max-width="334px">
          <v-img
            src="../../assets/ecran3.jpg" alt=""
            height="200px"
          >
          </v-img>
          <v-card-title> Réparation et dépannage Pc </v-card-title>
          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="orange lighten-2" text> Explorer </v-btn>

            <v-btn icon @click="show2 = !show2">
              <v-icon>{{
                show2 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>

              <v-card-text style="text-align:justify">
                Master-Réparation,le spécialiste à Toulouse de la réparation de
                téléphones portables :iphone,Samsung Galaxy, Blackberry... du
                dépannage de tablettes tactiles:ipad,Galaxy Tab...et d'iPod.Nos
                réparateurs professionnels dépannent également tous les
                ordinateurs portables et ordinateurs fixes.Master-Réparation,
                c'est aussi la réparation et le flash de consoles de jeux
                console Microsoft XBox 360, consoles Nintendo, consoles Sony
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card max-width="334px">
          <v-img
            src="../../assets/ecran1.jpg" alt=""
            height="200px"
          >
          </v-img>
          <v-card-title>Réparations Iphone et Android </v-card-title>
          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="orange lighten-2" text> Explorer </v-btn>

            <v-btn icon @click="show3 = !show3">
              <v-icon>{{
                show3 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show3">
              <v-divider></v-divider>

              <v-card-text style="text-align:justify">
                La qualité du service : Notre magasin Master-Réparation à
                Toulouse est un centre expert en réparation de téléphones
                portables, tablettes tactiles, ordinateurs portables et
                ordinateurs de bureau, consoles de jeux, iPod dans la
                Haute-Garonne (31) avec des techniciens qualifiés.La rapidité du
                service : Nous prenons en charge votre matériel dès votre arrivé
                au magasin et la plupart de nos réparations sont immédiates.La
                garantie du service : Toutes nos réparations sont garanties 1
                an.La clarté du service : Dès la prise en charge, nous vous
                fournirons un devis gratuit et ferme
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show1: false,
    show2: false,
    show3: false,
  }),
};
</script>

<style lang="scss">
  .v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    background-color: antiquewhite;
}
</style>