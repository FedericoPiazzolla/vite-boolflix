<script>
import { store } from '../store';
import AppCard from './AppCard.vue';

export default {
  data() {
    return {
      store,
    };
  },
  components: { AppCard },
}
</script>

<template>
<main>
  <div class="container">
    <!-- movie section -->
    <div class="movie">
      <h2 v-if="store.movieList.length == 0 ? '' : 'h2.innerText'">Movie</h2>
      <div class="row">
        <div class="col" v-for="movie in store.movieList" :key="movie.id">
          <AppCard :movieObj="movie"/>
        </div>
      </div>
    </div>
    <!-- /movie section -->
    <hr v-if="store.movieList.length == 0 || store.seriesList.length == 0 ? '' : 'hr'">
    <!-- series section -->
    <div class="series">
      <h2 v-if="store.seriesList.length == 0 ? '' : 'h2.innerText'">Series</h2>
      <div class="row">
        <div class="col" v-for="series in store.seriesList" :key="series.id">
          <AppCard :movieObj="series"/>
        </div>
      </div>
    </div>
    <!-- /series section -->
  </div>
</main>

</template>

<style lang="scss" scoped>

  .container {
    height: calc(100vh - 100px);
    overflow-x: auto;

    h2 {
      text-align: center;
      padding: 3rem 0;
      color: red;
    }

    hr {
      border: 1px solid red;
      width: 80%;
      margin: 8rem auto 2rem;
    }
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
    .col {
       width: 342px;
    }
  }

</style>