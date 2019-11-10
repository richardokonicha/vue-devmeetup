<template>
  <v-app id="app">
    <v-app-bar
            app
            clipped-left
            color="blue darken-4"
            dark
    >
      <v-app-bar-nav-icon class="d-md-none" v-on:click="sideNav = !sideNav">
      </v-app-bar-nav-icon>
      <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">Dev Feast</router-link></v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items v-for="item in menuItem" v-bind:key="item.title" >
        <v-btn class="d-none d-md-flex" text router v-bind:to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer app temporary color="blue darken-3" dark v-model="sideNav">
      <v-list>
        <v-subheader>Reports</v-subheader>
        <v-list-item-group>
          <v-list-item v-for="item in menuItem" v-bind:key="item.title" router v-bind:to="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
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
        { icon: 'mdi-xbox-controller', title: 'View Meetups', link: '/meetups' },
        { icon: 'mdi-watch', title: 'Organize Meetup', link: '/createmeetup' },
        { icon: 'mdi-tilde', title: 'Profile', link: '/profile' },
        { icon: 'mdi-tennis', title: 'Sign up', link: '/signup' },
        { icon: 'mdi-mouse', title: 'Sign In', link: '/signin'}
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


