<script>
import { store } from '../store';

export default {
  data() {
    return {
      store,
    }
  },
  props: {
    series: Object,
  }
}
</script>

<template>
  <ul>
    <li>{{ series.name }}</li>
    <li>{{ series.original_name }}</li>
    <li>{{ series.original_language }}</li>
    <li>{{ series.vote_average }}</li>
  </ul>
</template>

<style></style>