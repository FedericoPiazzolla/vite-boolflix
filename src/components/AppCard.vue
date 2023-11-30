<script>
import { store } from '../store';

export default {
  data() {
    return {
      store,
      flags: ["de", "en", "es", "fr", "it", "ja"],
      imgUrl: "https://image.tmdb.org/t/p/w342"
    }
  },
  props: {
    movieObj: Object,
  },
  methods: {
    getImgPath(lang) {
      return new URL(`../assets/img/${lang}.png`, import.meta.url).href;
    }
  },
  computed: {
    isFlag() {
      return this.flags.includes(this.movieObj.original_language);
    },
    title() {
      return this.movieObj.title ? this.movieObj.title : this.movieObj.name;
    },
    originalTitle() {
      return this.movieObj.original_title 
        ? this.movieObj.original_title 
        : this.movieObj.original_name;
    }
  }
}
</script>

<template>
  <img :src="`${imgUrl}${movieObj.backdrop_path}`" alt="">
  <ul>
    <li>{{ title }}</li>
    <li>{{ originalTitle }}</li>
    <li v-if="isFlag">
      <img
        :src="getImgPath(movieObj.original_language)" 
        alt=""
      >
    </li>
    <li v-else>{{ movieObj.original_language }}</li>
    <li>{{ movieObj.vote_average }}</li>
  </ul>
</template>

<style lang="scss" scoped>

</style>