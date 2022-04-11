<template>
  <div>
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script>
import { fetchNews } from '@/api'
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem
  },
  data() {
    return {
      newsItems: []
    }
  },
  methods: {
    async fetchNewsItems() {
      const response = await fetchNews()
      console.log(response.data)
      this.newsItems = response.data
    }
  },

  created() {
    this.fetchNewsItems()
  }
}
</script>

<style></style>
