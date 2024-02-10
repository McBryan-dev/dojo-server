import { createApp } from 'vue';
import App from './App.json';
// Create a Vue application instance
const app = createApp(App);

app.mount('#app');

// {
//   "posts": [
//     {
//       "id": 1,
//       "name": "bryan",
//       "age": 32
//     }
//   ]
// }