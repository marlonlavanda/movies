import Vue from "vue";
// import bootstrap from "bootstrap";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

const APIKEY = "cb530e1cb3be182644469b5a56922abc";
const BASE_URL = "https://api.themoviedb.org/3/";
Vue.mixin({
  data() {
    return {
      apiConfig: `?api_key=${APIKEY}&language=es-MX`,
      apiBaseURL: BASE_URL
    };
  },
  filters: {
    coverURL(str) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2${str}`;
    }
  }
});
// Vue.use(bootstrap);
Vue.config.productionTip = false;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
