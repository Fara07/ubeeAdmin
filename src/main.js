import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/main.css";
import router from "@/router";
import VueTailwindDatepicker from "vue-tailwind-datepicker";

const app = createApp(App);

app.use(router);
app.mount("#app");
app.use(VueTailwindDatepicker);
