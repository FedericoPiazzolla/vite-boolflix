<script >

import axios from 'axios';
import { store } from "./store";

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    getMovie() {
      axios
      .get(`${this.store.baseUrl}search/movie`, {
        params: {
          query: this.store.searchQuery,
          api_key: this.store.apiKey,
        }
      })
      .then((resp) => {
        this.store.movieList = resp.data.results;
      });
    },
    getSeries() {
      axios
      .get(`${this.store.baseUrl}search/tv`, {
        params: {
          query: this.store.searchQuery,
          api_key: this.store.apiKey,
        }
      })
      .then((resp) => {
        this.store.seriesList = resp.data.results;
      });
    },
    searchQueryElem() {
      this.getMovie();
      this.getSeries();
    },
  },
  created() {
    this.getMovie();
    this.getSeries();
  }
}
</script>

<template>
  <div class="wrapper">
    <AppHeader @sendQuery="searchQueryElem()"/>
    <h2 v-if="store.movieList.length == 0 || store.seriesList.length == 0">Scegli una serie o un film da iniziare...</h2>
    <AppMain />
  </div>
  
</template>

<style lang="scss">
@use './style/general.scss';
@import '@fortawesome/fontawesome-free/css/all.css';

.wrapper {
  height: 100vh;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: red;
    font-size: 4rem;
  }
}
</style>
