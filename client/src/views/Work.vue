
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
    <v-layout row wrap>
      <v-flex xs12 md6 lg3>
        <v-menu>
          <v-select
            label="Solo field"
            solo
            menu-props="offsetY"
            slot="activator"
          ></v-select>
          <!-- <v-list>
            <v-list-tile v-for="(item, index) in items" :key="index" >
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list> -->
        </v-menu>
      </v-flex>
    </v-layout>
    <v-flex row justify-space-around>
      <v-btn color="success">Success</v-btn>
      <v-btn color="error">Error</v-btn>
      <v-btn color="warning">Warning</v-btn>
      <v-btn color="info">Info</v-btn>
    </v-flex>
    <v-layout row justify-space-around>
      <v-flex xs2>
        <v-btn color="success">Success</v-btn>
      </v-flex>
      <v-flex xs2>
        <v-btn color="success">Success</v-btn>
      </v-flex>
      <v-flex xs2>
        <v-btn color="warning">Warning</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 lg3 v-for="n in 4" :key="n">
        <v-card>
          <v-card-text class="listings_cards">First Card</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row mt-3>
      <v-flex xs12 md6 lg3 v-for="n in 4" :key="n">
        <v-card id="second_stack">
          <v-card-text class="listings_cards">Second Card</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    methods: {
      say(message) {
        alert(message)
      }
    }
  }
</script>
<style>
  .listings_cards{
    height: 200px;
  }

  #second_stack{
    background-color: bisque;
  }
</style>
