<template>
  <div class="container">
    <h5>Bienvenido {{ user }}</h5>
    <h1>Películas</h1>
    <div class="row">
      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="(movie, key) in movies"
        :key="key"
      >
        <MovieComp
          :id="movie.id"
          :title="movie.title"
          :synopsis="movie.synopsis"
          :cover="movie.cover"
          :like="movie.like"
          @toogleLike="onToogleLike"
        ></MovieComp>
      </div>
    </div>
    <label
      >Cambiar username

      <input :value="user.name" @change="setNameUser" />
      <input :value="user.surname" @change="setSurnameUser" />
    </label>
    {{ oldUser }}
    <MovieFav :show.sync="showFav"></MovieFav>
  </div>
</template>

<script>
import MovieComp from "@/components/movie-comp.vue";
import MovieFav from "@/components/movie-fav.vue";

export default {
  components: { MovieComp, MovieFav },
  data() {
    return {
      oldUser: null,
      user: {
        name: "Marlon",
        surname: "Lavanda"
      },
      movies: [
        {
          id: 1,
          title: "Titanic",
          synopsis:
            "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
          cover:
            "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR88,0,630,1200_AL_.jpg",
          like: false
        },
        {
          id: 2,
          title: "El rey León",
          synopsis:
            "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
          cover:
            "https://i.pinimg.com/originals/b7/82/fc/b782fc749af22348e676ffe771e2f18e.jpg",
          like: false
        },
        {
          id: 3,
          title: "Avengers: Endgame",
          synopsis:
            "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._AC_SL1500_.jpg",
          like: false
        }
      ],
      showFav: false
    };
  },
  watch: {
    user(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.oldUser = oldVal;
    }
  },
  methods: {
    setNameUser(event) {
      this.user.name = event.target.value;
    },
    setSurnameUser(event) {
      this.user.surname = event.target.value;
    },
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
  },
  mounted() {
    console.log(this.$refs.movieFav.message);
    this.$refs.movieFav.message = " Hola Mijín, llegarás lejos";
    this.$refs.movieFav.showMessage();
  }
};
</script>
