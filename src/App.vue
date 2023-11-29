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
      .get(this.store.baseUrl + this.store.apiKey)
      .then((resp) => {
        console.log(resp.data);
      });
    }
  }
}
</script>

<template>

</template>

<style >

</style>
