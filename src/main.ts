import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

//import element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);

app.use(router);

app.mount("#app");
