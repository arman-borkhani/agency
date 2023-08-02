import { createApp } from 'vue';
import App from './App.vue';
import BaseContainer from './components/BaseContainer.vue';

const app = createApp(App);
app.component('base-container', BaseContainer);

app.mount('#app');