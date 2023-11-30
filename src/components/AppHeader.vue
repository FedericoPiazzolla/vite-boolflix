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
    <label for="search-input"></label>
    <input 
    type="text" 
    id="search-input"
    v-model="store.searchQuery"
    @keyup.enter="$emit('sendQuery')"
    >
    <button @click="$emit(`sendQuery`)">invia</button>
  </header>
</template>

<script></script>