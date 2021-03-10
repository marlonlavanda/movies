<template>
  <div :id="id | formatId" class="card" :class="{ 'movie-like': like }">
    <img :src="cover | coverURL" class="card-img-top" />
    <div class="card-body">
      <h2 class="card-title">{{ title | uppercase }}</h2>
      <p class="card-text">{{ synopsis | excertp }}</p>
      <button
        class="btn btn-light"
        :class="{ 'btn-like': like, 'btn-light': !like }"
        @click="toogleLike"
      >
        <span v-text="like ? 'Favorita' : 'Agregar a favoritos'"></span>
        <i class="fa-heart ml-2" :class="{ far: !like, fas: like }"></i>
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
      return this.like ? "btn-like" : "btn-light";
    }
  },
  methods: {
    toogleLike() {
      let movie = this.$parent.movies.find(m => m.id === this.id);
      movie.like = !this.like;
      this.$parent.showFav = !this.like;
      this.$parent.sayHello();
    }
  }
};
</script>
