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

app.use(router);
app.use(createPinia());
import { useLangStore } from "./stores/lang";


const i18n = createI18n({
    locale: useLangStore().lang,
    messages:{
        en: en,
        ru: ru,
        uz: uz,
    }
});



app.use(i18n)


app.mount("#app");
