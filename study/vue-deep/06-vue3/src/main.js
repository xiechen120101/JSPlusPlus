import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
console.log(app.mount("#app"))