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

        <button @click="$emit(`sendQuery`)">invia</button>
      </div>

    </div>

  </header>
</template>

<script lang="scss" scoped>

</script>