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
    },
    getVoteFive(vote) {
      const voteFive = Math.round(vote / 2);
      return voteFive;
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
  <div class="card">
    <img v-if="movieObj.poster_path" :src="`${imgUrl}${movieObj.poster_path}`" alt="">
    <img v-else src="https://techdenbd.com/backend/img/placeholder_image/Wyov47ZqxJID67GksbXO.gif">

    <!-- content -->
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
      <li>{{ getVoteFive(movieObj.vote_average) }}</li>
    </ul>
    <!-- content -->
  </div>
  
</template>

<style lang="scss" scoped>

</style>