<script setup>
import { ref, onMounted } from 'vue'
import { getMarketNews } from '@/apis/home'
import { readableTimestamp } from '@/utils/timestamp-conversion'

onMounted(() => {
  getHomeNews()
})

// {
//   guid: '',
//   link: '',
//   pubDate: '',
//   source: '',
//   title: ''
// }

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
  <h1>Overview</h1>
  <div v-if="loading">
    <v-progress-linear indeterminate color="primary"></v-progress-linear>
  </div>
  <v-container v-else>
    <v-row justify="center">
      <v-col cols="4" v-for="(story, index) in newsStories" :key="index">
        <v-card color="blue" theme="dark">
          <v-card-title class="text-h5">
            <v-tooltip :text="story.title">
              <template v-slot:activator="{ props }">
                <span v-bind="props">{{ story.title }}</span>
              </template>
            </v-tooltip>
          </v-card-title>

          <v-card-subtitle>
            {{ readableTimestamp(story.pubDate) }} - {{ story.source }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn variant="text" :href="story.link" target="_blank"> Read Story </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
