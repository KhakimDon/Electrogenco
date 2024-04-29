import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import en from "./locales/en.json"
import ru from "./locales/ru.json"
import uz from "./locales/uz.json"

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const i18n = createI18n({
    locale: document.cookie.split('=')[1],
    messages:{
        en: en,
        ru: ru,
        uz: uz,
    }
});

app.use(createPinia());
app.use(i18n)
app.use(router);

app.mount("#app");
