import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favMovies: []
  },
  mutations: {
    toggleFavMovie(state, movie) {
      let index = state.favMovies.findIndex(
        favMovie => favMovie.id === movie.id
      );
      if (index >= 0) {
        state.favMovies.splice(index, 1);
        return;
      }
      state.favMovies.push(movie);
    }
  },
  actions: {},
  modules: {}
});
