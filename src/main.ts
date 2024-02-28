import './assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiProfileLine, IoMail, SiTwitter } from "oh-vue-icons/icons";
addIcons(RiProfileLine, IoMail, SiTwitter);

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount('#app');
