<template>
  <v-footer
    color="grey darken-4"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="grey darken-4 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Master</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Accueil',
        'A propos',
        'Team',
        'Services',
        'Blog',
        'Contacter nous',
      ],
    }),
  }
</script>