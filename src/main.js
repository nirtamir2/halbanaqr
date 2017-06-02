// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './vue-plugins.js'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyCGdKNX7cgzeKJ6DKeYPR-j0lGQghnTZaw',
  authDomain: 'halbana-15c52.firebaseapp.com,',
  databaseURL: 'https://halbana-15c52.firebaseio.com',
  projectId: 'halbana-15c52',
  storageBucket: 'halbana-15c52.appspot.com',
  messagingSenderId: '638895572995'
}
let firebaseApp = firebase.initializeApp(config)
let db = firebaseApp.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  firebase: {
    // simple syntax, bind as an array by default
    anArray: db.ref('url/to/my/collection'),
    // can also bind to a query
    // anArray: db.ref('url/to/my/collection').limitToLast(25)
    // full syntax
    anObject: {
      source: db.ref('url/to/my/object'),
      // optionally bind as an object
      asObject: true,
      // optionally provide the cancelCallback
      cancelCallback: () => {
        console.log('cancel call back firebase')
      },
      // this is called once the data has been retrieved from firebase
      readyCallback: () => {
        console.log('readyCallback')
      }
    }
  }
})

