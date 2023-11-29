<script setup>
import { ref, onMounted } from 'vue'
import { getMarketNews } from '@/apis/home'

onMounted(() => {
  getHomeNews()
})

const loading = ref(false)
const newsStories = ref()

async function getHomeNews() {
  loading.value = true
  try {
    const { data } = await getMarketNews('earnings')
    newsStories.value = data.body.splice(0, 6)
  } catch (e) {
    console.error(e)
  }

  loading.value = false
}
</script>

<template>
  <h1>Home Page</h1>
  <div v-if="loading">
    <v-progress-linear indeterminate color="primary"></v-progress-linear>
  </div>
  <v-container v-else>
    <v-row justify="center">
      <v-col cols="4" v-for="(story, index) in newsStories" :key="index">
        <v-card
          v-if="index <= 2"
          :key="story.source"
          :subtitle="story.title"
          subtitle="This is a subtitle"
          text="This is content"
          class="px=2"
        ></v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="px=2">
      <v-col cols="4" v-for="(story, index) in newsStories" :key="index">
        <v-card
          v-if="index >= 3 && index <= 5"
          :key="story.source"
          :subtitle="story.title"
          subtitle="This is a subtitle"
          text="This is content"
          class="px=2"
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
