import { createApp, defineComponent } from './vendor/vue.esm-browser.js';
const API_URL = 'https://course-vue.javascript.ru/api';

const App = {
  name: 'App',
  data() {
    return {
      selectedMeetup: undefined,
      meetupTitle: '',
    };
  },

  methods: {
    fetchMeetupById(meetupId) {
      return fetch(`${API_URL}/meetups/${meetupId}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return response.json().then((error) => {
              throw error;
            });
          }
        })
        .then((data) => {
          this.meetupTitle = data.title;
        });
    },
  },

  watch: {
    selectedMeetup(newVal) {
      this.fetchMeetupById(newVal);
    },
  },
};

const app = createApp(App);
const vm = app.mount('#app');
