<template>
  <div>

  <v-app id="inspire">
    <v-toolbar color="deep-purple" dark fixed app clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>binds.co</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

<v-navigation-drawer persistent v-model="drawer" enable-resize-watcher app>
  <SideNav></SideNav>
</v-navigation-drawer>

    <main>
      <v-content>
        <v-container fluid fill-height>
          <v-layout>
            <transition name="fade">
              <keep-alive>
                <nuxt/>
              </keep-alive>
            </transition>
          </v-layout>
        </v-container>
      </v-content>
    </main>
  </v-app>
  </div>
</template>
<script>
import SideNav from '~/components/SideNav'
export default {
  name: 'Default',
  data () {
    return {
      drawer: true
    }
  },
  components: {SideNav}
}
</script>


<style>
 .fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
