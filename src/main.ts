import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

// SASS
import './styles/global.scss';

// animate css
import 'animate.css';

createApp(App).use(store).mount('#app')
