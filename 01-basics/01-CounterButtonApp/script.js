import { createApp, defineComponent } from './vendor/vue.esm-browser.js';
const App = defineComponent({
  name: 'app',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
});
const app = createApp(App);
const vm = app.mount('#app');
