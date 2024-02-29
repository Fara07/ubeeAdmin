import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/main.css";
import router from "@/router";
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.ubee.pro/",
});
axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      config.headers["Authorization"] = `Bearer ` + user.token;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.config.globalProperties.$axios = { ...axiosInstance };
app.use(vuetify);
app.use(router);
app.use(VueTailwindDatepicker);
app.mount("#app");
