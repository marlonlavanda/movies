<template>
  <div class="container">
    <h5>Bienvenido {{ user.name }} {{ user.surname }}</h5>
    <h1>Películas App</h1>
    <div class="row">
      <div
        class="col-12 col-md-6 col-lg-4 py-2"
        v-for="(movie, key) in movies"
        :key="key"
      >
        <MovieComp
          :id="movie.id"
          :title="movie.title"
          :synopsis="movie.overview"
          :cover="movie.poster_path"
          :like="movie.like"
          @toogleLike="onToogleLike"
        ></MovieComp>
      </div>
    </div>
    <!-- <b-row> -->
    <div class="mt-3">
      <b-pagination-nav
        v-for="(n, index) in total_pages"
        :key="index"
        align="center"
        :link-gen="linkGen"
        use-router
        :number-of-pages="n"
      ></b-pagination-nav>
    </div>
    <!-- </b-row> -->
    <MovieFav :show.sync="showFav"></MovieFav>
  </div>
</template>

<script>
import MovieComp from "@/components/movie-comp.vue";
import MovieFav from "@/components/movie-fav.vue";
// import axios from "axios";

const APIKEY = "cb530e1cb3be182644469b5a56922abc";
const BASE_URL = "https://api.themoviedb.org/3/";

export default {
  components: { MovieComp, MovieFav },
  data() {
    return {
      oldUser: null,
      user: {
        name: "Marlon",
        surname: "Lavanda"
      },
      movies: [],
      showFav: false,
      page: 1,
      total_page: null
    };
  },
  mounted() {
    let locationURL = new URL(window.location.href);
    this.page = locationURL.searchParams.get("page");
    this.fetchPopularMovies();
    // console.log(this.$refs.movieFav.message);
    // this.$refs.movieFav.message = " Hola Mijín, llegarás lejos";
    // this.$refs.movieFav.showMessage();
  },
  methods: {
    fetchPopularMovies() {
      const URL = `${BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=${this.page}`;
      fetch(URL)
        .then(res => res.json())
        .then(({ results, page, total_pages }) => {
          console.log(page, total_pages);
          this.total_pages = total_pages;
          this.movies = results.map(m => {
            m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`;
            m.like = false;
            return m;
          });
        });
    },
    // async fetchPopularMovies() {
    //   const URL = `${BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`;

    //   const res = await axios.get(URL);
    //   if (res.status === 200) {
    //     this.movies = res.data;
    //   }
    // },
    onToogleLike(data) {
      let movieLike = this.movies.find(movie => movie.id === data.id);
      movieLike.like = data.like;
      this.showFav = data.like;
      // setTimeout(() => {
      //   this.showFav = false;
      // }, 1000);
      // if (data.like) {
      //   alert(`${movieLike.title} agregada a favoritos`);
      // }
    },
    onHideFav(show) {
      this.showFav = show;
    }
  }
};
</script>
