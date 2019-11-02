<template>
  <v-app>
    <v-app-bar
      color="blue darken-4"
      dark
      app
    >
      <v-app-bar-nav-icon/>
      <v-toolbar-title>Dev Feast</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="sideNav" app color="blue darken-3" :mini-variant.sync="mini" permanent>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src=""></v-img>
        </v-list-item-avatar>
        <v-list-item-title>
          John Leider
        </v-list-item-title>
      </v-list-item>
      
      
    </v-navigation-drawer>
    <v-content></v-content>
  </v-app>
</template>
<script>

export default {
  name: 'app',
  components: {
  },
  data(){
    return {
      sideNav: true
    }
  }
};
</script>


