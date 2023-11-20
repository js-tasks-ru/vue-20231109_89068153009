import { createApp } from './vendor/vue.esm-browser.js';
const API_URL = 'https://course-vue.javascript.ru/api';

//вынесена за пределы методов
function fetchMeetupById(meetupId) {
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
      return data.title;
    });
}

const App = {
  name: 'App',
  data() {
    return {
      selectedMeetup: undefined,
      meetupTitle: '',
    };
  },
  watch: {
    selectedMeetup(newVal) {
      fetchMeetupById(newVal).then((title) => {
        this.meetupTitle = title;
      });
    },
  },
};

const app = createApp(App);
const vm = app.mount('#app');
