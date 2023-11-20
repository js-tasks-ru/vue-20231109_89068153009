import { createApp, defineComponent } from './vendor/vue.esm-browser.js';
const App = defineComponent({
  name: 'name',
  data() {
    return {
      a: 0,
      b: 0,
      result: 0,
      operator: 'sum',
    };
  },

  computed: {
    calculate() {
      switch (this.operator) {
        case 'sum':
          this.result = this.a + this.b;
          break;
        case 'subtract':
          this.result = this.a - this.b;
          break;
        case 'multiply':
          this.result = this.a * this.b;
          break;
        case 'divide':
          this.result = this.a / this.b;
          break;
      }
    },
  },
});

const app = createApp(App);
const vm = app.mount('#app');
