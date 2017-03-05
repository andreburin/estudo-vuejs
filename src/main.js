import Vue from 'vue'
import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import i18next from 'i18next'
import $ from 'jquery'

i18next.init({
  fallbackLng: false,
  debug: true,
  fixLng: true,
  load: 'current'
},
function (translation) {
  $('[data-i18n]').i18n()
  translation('app-name')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
