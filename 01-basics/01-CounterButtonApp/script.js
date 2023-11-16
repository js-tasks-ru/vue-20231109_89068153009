import { createApp, defineComponent } from './vendor/vue.esm-browser.js';
const App = defineComponent({
  name: 'app',
  data() {
    return {
      a: 0,
    };
  },
  methods: {
    increment() {
      this.a++;
    },
  },
});
const app = createApp(App);
const vm = app.mount('#app');
