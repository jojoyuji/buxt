<template>
<v-navigation-drawer persistent v-model="show" enable-resize-watcher app>
  <v-list dense>
    <v-list-tile router to="/binds" exact>
      <v-list-tile-action>
        <v-icon>mdi-home</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>binds</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile router to="/" exact>
      <v-list-tile-action>
        <v-icon>mdi-home</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile router to="surveys" exact>
      <v-list-tile-action>
        <v-icon>mdi-emoticon-happy</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Surveys</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile router to="login">
      <v-list-tile-action>
        <v-icon>mdi-login-variant</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Login</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile @click="logout()">
      <v-list-tile-action>
        <v-icon>mdi-login-variant</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Logout</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
  props: ['show'],
  name: 'SideNav',
  data () {
    return { }
  },
  methods: {
    logout () {
      this.$store.dispatch('LOGOUT')
      this.$router.push('/login')
    }
  }
}
</script>
