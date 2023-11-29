<script>
import { store } from '../store';
import AppMovieCard from './AppMovieCard.vue';
import AppSeriesCard from './AppSeriesCard.vue';

export default {
    data() {
        return {
          store,
        };
    },
    components: { AppMovieCard, AppSeriesCard },
}
</script>

<template>
<main>
  <div class="container">
    <!-- movie section -->
    <div class="movie">
      <h2>Movie</h2>
      <div class="row">
        <div class="col" v-for="movie in store.movieList" :key="movie.id">
          <AppMovieCard :movie="movie"/>
        </div>
      </div>
    </div>
    <!-- /movie section -->
    <hr>
    <!-- series section -->
    <div class="series">
      <h2>Series</h2>
      <div class="row">
        <div class="col" v-for="series in store.seriesList" :key="series.id">
          <AppSeriesCard :series="series"/>
        </div>
      </div>
    </div>
    <!-- /series section -->
  </div>
</main>

</template>

<style>
</style>