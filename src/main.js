import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import firebase from 'firebase'

Vue.use(ElementUI);

Vue.config.productionTip = false;

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCjUb0qu6xc-ORfz_dmzihggCuZixeqxcw",
    authDomain: "vue-app-58eef.firebaseapp.com",
    databaseURL: "https://vue-app-58eef.firebaseio.com",
    projectId: "vue-app-58eef",
    storageBucket: "vue-app-58eef.appspot.com",
    messagingSenderId: "413034383395"
  };

firebase.initializeApp(config);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


