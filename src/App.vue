<script >

import axios from 'axios';
import { store } from "./store"

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovie() {
      axios
      .get(this.store.baseUrl, {
        params: {
          query: this.store.searchQuery,
          api_key: this.store.apiKey,
        }
      })
      .then((resp) => {
        console.log(resp);
      });
    }
  }
}
</script>

<template>

</template>

<style >

</style>
