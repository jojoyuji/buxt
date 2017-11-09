<template>
  <v-list dense>
    <v-list-tile router to="/" exact>
      <v-list-tile-action>
        <v-icon>mdi-home</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile router to="/home" exact>
      <v-list-tile-action>
        <v-icon>mdi-emoticon-happy</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile router to="/home/about">
      <v-list-tile-action>
        <v-icon>mdi-login-variant</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Home/ about</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile router to="/about" exact>
      <v-list-tile-action>
        <v-icon>mdi-emoticon-happy</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>/About</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile router to="/hello" exact>
      <v-list-tile-action>
        <v-icon>mdi-emoticon-happy</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>/Hello</v-list-tile-title>
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
</template>

<script>
export default {
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
