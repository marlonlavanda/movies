<template>
  <div :id="id | formatId" class="card" :class="{ 'movie-like': isFav }">
    <img :src="cover | coverURL" class="card-img-top" />
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text">{{ synopsis | excertp }}</p>
      <button class="btn" :class="btnStatus" @click="toggleLike">
        <span v-text="like ? 'Favorita' : 'Agregar a favoritos'"></span>
        <i class="fa-heart ml-2" :class="{ far: !isFav, fas: isFav }"></i>
      </button>
      <router-link
        :to="{ name: 'movie', params: { id: id } }"
        class="btn btn-primary"
        >Detalle</router-link
      >
    </div>
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
  filters: {
    formatId(value) {
      return `movieCard-${value}`;
    },
    uppercase(value) {
      return value.toUpperCase();
    },
    reverse(value) {
      let word = value.split("");
      return word.reverse().join("");
    },
    excertp(value) {
      return value.substring(0, 100) + "...";
    }
  },
  data() {
    return {
      className: {
        "btn-like": true,
        "btn-light": false
      }
    };
  },
  watch: {
    like(newValue, oldValue) {
      console.log(newValue, oldValue);
    }
  },
  computed: {
    btnStatus() {
      return this.isFav ? "btn-like" : "btn-light";
    },
    isFav() {
      let favMovies = this.$store.state.favMovies;
      let index = favMovies.findIndex(movie => movie.id === this.id);

      return index >= 0;
    }
  },
  methods: {
    toggleLike() {
      // this.like = !this.like
      let data = {
        id: this.id,
        like: !this.like
      };
      this.$emit("toggleLike", data);
    }
  }
};
</script>
