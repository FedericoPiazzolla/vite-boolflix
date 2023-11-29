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
      console.log(store.searchQuery)
      this.getMovie()
      this.getSeries()
      console.log(this.store.seriesList)
      console.log(this.store.movieList)
    },
  },
  created() {
    this.getMovie();
    this.getSeries();
  }
}
</script>

<template>
  <AppHeader @sendQuery="searchQueryElem"/>
  <AppMain />
</template>

<style >

</style>
