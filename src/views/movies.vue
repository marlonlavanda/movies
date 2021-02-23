<template>
  <div>
    <h1>Películas</h1>
    <MovieComp
      v-for="movie in movies"
      :key="movie.id"
      :id="movie.id"
      :title="movie.title"
      :synopsis="movie.synopsis"
      :cover="movie.cover"
      :like.sync="movie.like"
    ></MovieComp>
  </div>
</template>

<script>
import MovieComp from "@/components/movie-comp.vue";
export default {
  components: { MovieComp },
  data() {
    return {
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
      ]
    };
  },
  methods: {
    onToogleLike(data) {
      let movieLike = this.movies.find(movie => movie.id === data.id);
      movieLike.like = data.like;
    }
  }
};
</script>
