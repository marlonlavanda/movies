import Vue from "vue";
// import bootstrap from "bootstrap";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.mixin({
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
  render: h => h(App)
}).$mount("#app");
