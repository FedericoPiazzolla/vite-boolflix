<script >

import axios from 'axios';
import { store } from "./store"
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
},
  methods: {
    getMovie() {
      axios
      .get(this.store.baseUrl, {
        params: {
          query: "ciao", //this.store.searchQuery,
          api_key: this.store.apiKey,
        }
      })
      .then((resp) => {
        console.log(resp.data);
      });
    }
  },
  created() {
    this.getMovie();
  }
}
</script>

<template>
<AppHeader />
</template>

<style >

</style>
