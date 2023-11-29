<script setup>
import { useTheme } from 'vuetify'

useTheme()

import { ref } from 'vue'
import { RouterView } from 'vue-router'

const drawer = ref(false)
const items = ref([
  {
    title: 'Home',
    value: 'home',
    icon: 'mdi mdi-list-status',
    route: '/'
  },
  {
    title: 'About',
    value: 'about',
    icon: 'mdi mdi-information-variant',
    route: 'about'
  },
  {
    title: 'Commodities',
    value: 'commodities',
    icon: 'mdi mdi-gold',
    route: 'commodities'
  }
])
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app color="blue">
      <v-img class="pa-3">
        <v-avatar size="x-large" class="mb-2">
          <v-img
            src="https://2.gravatar.com/avatar/269680327180befdbd188f8bd816deed54b1b2f3d1edc854aa56856cbb9ef072"
            alt="Sammy Sam"
          ></v-img>
        </v-avatar>
        <div class="text-white text-subtitle-1 font-weight-bold">Basset Hound</div>
        <div class="text-white text-subtitle-2">Sammy Sam</div>
      </v-img>
      <v-list>
        <v-list-item-group color="primary" mandatory>
          <v-list-item v-for="item in items" :key="item.title" dense router :to="item.route">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-title>{{ item.title }}</v-list-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="blue" app>
      <template v-slot:image>
        <v-img></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Wealth Watch</v-app-bar-title>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
