
<template>
  <v-container>
    <v-card-title primary-title class="py-2 px-4">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn fab dark small color="primary" @click="say('No Tooltip!')">
            <v-icon>shopping_cart</v-icon>
          </v-btn>
        </template>
        <span>This doesn't work :(</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn fab dark small color="primary" @click="say('Yay! Tooltip!')" slot="activator">
          <v-icon>show_chart</v-icon>
        </v-btn>
        <span>This one works!</span>
      </v-tooltip>

      <v-spacer></v-spacer>

      <v-toolbar light floating class="ma-2 hidden-sm-and-down">
        <v-text-field hide-details prepend-icon="search" single-line label="Search" class="pa-0"></v-text-field>
      </v-toolbar>
    </v-card-title>
  </v-container>
</template>

<script>
  export default {
    data () {

    },
    methods: {
      say(message) {
        alert(message)
      }
    }
  }
</script>