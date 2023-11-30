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
  }
}
</script>

<template>
  <ul>
    <li>{{ movie.title }}</li>
    <li>{{ movie.title }}</li>
    <img src="" alt="">
    <li>{{ movie.original_language }}</li>
    <li>{{ movie.vote_average }}</li>
  </ul>
</template>

<style></style>