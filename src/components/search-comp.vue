<template>
  <div>
    <b-form @submit.prevent="search">
      <b-input-group>
        <b-input-group-prepend v-show="query">
          <b-button variant="outline-info"
            ><i class="fas fa-times mr-2"></i
          ></b-button>
        </b-input-group-prepend>
        <b-form-input v-model="query" placeholder="Search..."></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-secondary"
            ><i class="fas fa-search mr-2"></i
          ></b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form>
  </div>
</template>
<script>
const BASE_URL = "https://api.themoviedb.org/3/";
const APIKEY = "cb530e1cb3be182644469b5a56922abc";

export default {
  name: "SearchComp",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      const URL = `${BASE_URL}search/movie?api_key=${APIKEY}&language=es-MX&query=${this.query}`;
      fetch(URL)
        .then(res => res.json())
        .then(data => {
          console.log("Hola" + data);
          this.$emit("input", data);
        });
    }
  }
};
</script>
