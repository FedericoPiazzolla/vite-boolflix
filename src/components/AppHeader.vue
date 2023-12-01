<script>
import { store } from '../store';

export default {
  data() {
    return{
      store,
    }
  },
  emits: ["sendQuery"]
}
</script>

<template>
  <header>
    <div class="container">
      <h1>BOOLFLIX</h1>
      <div class="search-section">

        <label for="search-input"></label>
        <input 
        type="text" 
        id="search-input"
        v-model="store.searchQuery"
        @keyup.enter="$emit('sendQuery')"
        >

        <button @click="$emit(`sendQuery`)">Cerca</button>
      </div>

    </div>

  </header>
</template>

<style lang="scss" scoped>

header {
  height: 100px;
  background-color: black;

  .container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    h1 {
      color: red;
    }

    .search-section {
      margin-right: 2rem;

      input {
        padding: .4rem;
        border: none;
      }

      button {
        padding: .4rem .8rem;
        border: none;
        background-color: red;
        color: white;
      }
    }
  }
}
</style>