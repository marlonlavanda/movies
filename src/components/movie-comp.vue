<template>
  <div>
    <img :src="cover" />
    <h2 v-text="title"></h2>
    <p v-text="synopsis"></p>
    <button
      @click="toogleLike"
      v-text="like ? 'Favorita' : 'Agregar a favoritos'"
    ></button>
    <hr />
  </div>
</template>
<script>
export default {
  name: "MovieComp",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    synopsis: {
      type: String,
      required: true
    },
    cover: {
      type: String,
      required: true
    },
    like: {
      type: Boolean,
      required: true,
      default() {
        return false;
      }
    }
  },
  methods: {
    toogleLike() {
      let movie = this.$parent.movies.find(m => m.id === this.id);
      movie.like = !this.like;
      this.$parent.showFav = !this.like;
    }
  }
};
</script>
