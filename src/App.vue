<template>
  <v-app id="app">
    <v-app-bar
      color="blue darken-4"
      dark
      app
      clipped-left
    >
      <v-app-bar-nav-icon class="d-md-none" v-on:click="sideNav = !sideNav">
      </v-app-bar-nav-icon>
      <v-toolbar-title>Dev Feast</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items >
        <v-btn text class="d-none d-md-flex"> <v-icon left>mdi-call-split</v-icon>View Meetups</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer clipped dark v-model="sideNav" app color="blue darken-3">
      <v-list>
        <v-subheader>Reports</v-subheader>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-call-split</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Select a meetup</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      
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
      sideNav: false,
      menuItem: [
        { icon: 'supervisor_account', title: 'View Meetups' },
        { icon: 'room', title: 'Organize Meetup' },
        { icon: 'person', title: 'Profile' },
        { icon: 'face', title: 'Sign up' },
        { icon: 'lock_open', title: 'Sign In' }
      ]
    }
  },
  methods: {
    sideNavAction(){
      this.sideNav = !this.sideNav
    }
  }
};
</script>


