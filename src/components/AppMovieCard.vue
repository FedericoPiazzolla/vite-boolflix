<script>
import { store } from '../store';

export default {
  data() {
    return {
      store,
    }
  },
  props: {
    movie: Object,
  }
}
</script>

<template>
  <ul>
    <li>{{ movie.title }}</li>
    <li>{{ movie.title }}</li>
    <li>{{ movie.original_language }}</li>
    <li>{{ movie.vote_average }}</li>
  </ul>
</template>

<style></style>