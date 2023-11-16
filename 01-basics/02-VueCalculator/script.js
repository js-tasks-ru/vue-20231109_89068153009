import { createApp, defineComponent } from './vendor/vue.esm-browser.js';
const App = defineComponent({
  name: 'name',
  data() {
    return {
      a: 0,
      b: 0,
      c: 0,
      operator: 'sum',
    };
  },

  methods: {
    calculate() {
      switch (this.operator) {
        case 'sum':
          this.c = this.a + this.b;
          break;
        case 'subtract':
          this.c = this.a - this.b;
          break;
        case 'multiply':
          this.c = this.a * this.b;
          break;
        case 'divide':
          this.c = this.a / this.b;
          break;
      }
    },
  },
});

const app = createApp(App);
const vm = app.mount('#app');
