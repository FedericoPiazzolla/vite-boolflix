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
     return  Math.round(vote / 2);
    },
    getStarsEmpty(vote) {
      return 5 - this.getVoteFive(vote);
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
    <img class="not-found" v-else src="https://techdenbd.com/backend/img/placeholder_image/Wyov47ZqxJID67GksbXO.gif">

    <!-- content -->
    <ul>
      <li>Title: {{ title }}</li>
      <li>Original Title: {{ originalTitle }}</li>
      <li v-if="isFlag">
        lenguage:
        <img
          :src="getImgPath(movieObj.original_language)" 
          alt=""
        >
      </li>
      <li v-else>Lenguage: {{ movieObj.original_language }}</li>
      <li>
        Vote: 
        <i 
          v-for="star in getVoteFive(movieObj.vote_average)" 
          class="fa-solid fa-star" 
          style="color: darkgoldenrod;"
        ></i>

        <i 
        v-for="star in getStarsEmpty(movieObj.vote_average)"
          class="fa-regular fa-star"
          style="color: darkgoldenrod;"
        ></i>
      </li>
    </ul>
    <!-- content -->
  </div>
  
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid black;
  padding: .4rem;

  img {
    max-width: 100%;

    &.not-found{
      width: 345px;
      height: 100%;
      object-fit: contain;
    }
  }
}
  
</style>