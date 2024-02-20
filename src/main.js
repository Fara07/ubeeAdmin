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

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(VueTailwindDatepicker);
app.mount("#app");
