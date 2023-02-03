import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./shared/router";
import store from "./shared/store";
import "@/shared/assets/css/style.css";

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
