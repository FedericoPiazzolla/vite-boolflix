import { reactive } from "vue";

export const store = reactive({
  movieList: [],
  seriesList: [],
  searchQuery: "",
  baseUrl: "https://api.themoviedb.org/3/search/movie",
  apiKey: "016927e2f9eb382388964ef9318383e9"
});