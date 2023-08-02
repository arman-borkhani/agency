import { createApp } from 'vue';
import App from './App.vue';
import BaseContainer from './components/BaseContainer.vue';
import BaseButton from './components/BaseButton';

const app = createApp(App);
app.component('base-container', BaseContainer);
app.component('base-button', BaseButton);

app.mount('#app');