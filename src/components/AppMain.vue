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
      <h2 v-if="store.movieList.length > 0">Movie</h2>
      <div class="row">
        <div class="col" v-for="movie in store.movieList" :key="movie.id">
          <AppCard :movieObj="movie"/>
        </div>
      </div>
    </div>
    <!-- /movie section -->

    <!-- series section -->
    <div class="series">
      <h2 v-if="store.seriesList.length > 0">Series</h2>
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
    padding: 1rem;

    h2 {
      padding: 3rem 0 1rem ;
      color: red;
      font-size: 3rem;
    }

    hr {
      border: 1px solid red;
      width: 80%;
      margin: 8rem auto 2rem;
    }

    .series {
      padding-bottom: 4rem;
    }
  }
  .row {
    display: flex;
    align-items: stretch;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: .7rem;

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: red;
      border-radius: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgb(53, 52, 52);
      border-radius: 8px;
    }
    .col {
      flex: 0 0 auto;
      padding-left: 1rem;
      width: calc(100% / 5);
    }
  }

</style>