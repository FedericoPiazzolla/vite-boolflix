<script>
import { store } from '../store';

export default {
  data() {
    return {
      store,
      flags: ["de", "en", "es", "fr", "it", "ja"],
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
  <ul>
    <li>{{ title }}</li>
    <li>{{ originalTitle }}</li>
    <img
    v-if="isFlag"
     :src="getImgPath(movieObj.original_language)" 
     alt="">
    <li v-else>{{ movieObj.original_language }}</li>
    <li>{{ movieObj.vote_average }}</li>
  </ul>
</template>

<style></style>