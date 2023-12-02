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
    getVoteFive() {
      return  Math.ceil(this.movieObj.vote_average / 2);
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
    <img class="poster" v-if="movieObj.poster_path" :src="`${imgUrl}${movieObj.poster_path}`" alt="">
    <img class="not-found" v-else src="https://techdenbd.com/backend/img/placeholder_image/Wyov47ZqxJID67GksbXO.gif">

    <!-- content -->
    <div class="card-content">
      <ul>
        <li>
          <span>Title:</span> 
          {{ title }}
        </li>
        <li>
          <span>Original Title:</span>  
          {{ originalTitle }}
        </li>
        <li v-if="isFlag">
          <span>lenguage:</span>
          <img
          class="flag"
            :src="getImgPath(movieObj.original_language)" 
            alt=""
          >
        </li>
        <li v-else>
          <span>Lenguage:</span> 
          {{ movieObj.original_language }}
        </li>
        <li>
          <span>Vote:</span> 
          <i 
            v-for="star in 5" 
            class="fa-star" 
            :class="star <= getVoteFive() ? 'fa-solid' : 'fa-regular'"
            style="color: darkgoldenrod;"
          ></i>
        </li>
        <li>
          <span>OverView:</span>
          {{ movieObj.overview }}
        </li>
      </ul>
    </div>
    
    <!-- content -->
  </div>
  
</template>

<style lang="scss" scoped>
.card {
  padding: .4rem;
  position: relative;
  border-radius: 10px;
  overflow-y: auto;

    &::-webkit-scrollbar {
      width: 2px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgb(53, 52, 52);
      border-radius: 8px;
    }
  .card-content {
    position: absolute;
    color: white;
    top: 60px;
    left: 20px;
    display: none;
    padding: 1rem;
    font-size: .8rem;

    ul {
      list-style-type: none;

      li {
        padding-bottom: .8rem;
      }

      span {
        font-weight: bolder;
        font-style: italic;
        color: wheat;
        display: block;
        padding-bottom: .3rem;
      }
    }
    
  } 
  img { 
    height: 450px;
    width: 100%;
    display: block;
    border-radius: 10px;

    &.not-found{
      height: 450px;
      object-fit: contain;
      background-color: white;
    }
    &.flag {
      width: 30px;
      height: 30px;
    }
  }
  &:hover {
    img {
      opacity: 20%;
      filter: blur(10px);
    }

    .flag {
      opacity: 100%;
      filter: none;
    }

    .card-content {
      display: block;
    }
  }
  
}
  
</style>