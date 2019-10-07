import 'babel-polyfill';
import Echo from 'laravel-echo';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './localize';
import Utils from './lib/Utils';
import AuthenticationUtils from './AuthenticationUtils';
import LocalStorageUtils from './LocalStorageUtils';

if ((~window.navigator.userAgent.indexOf('MSIE')) ||
(~window.navigator.userAgent.indexOf('Trident/')) ||
(~window.navigator.userAgent.indexOf('Edge/'))) {
  window.Promise = require('es6-promise').Promise;
  require('es6-object-assign').polyfill();
}


window._ = require('lodash');

/**
* We'll load jQuery and the Bootstrap jQuery plugin which provides support
* for JavaScript based Bootstrap features such as modals and tabs. This
* code may be modified to fit the specific needs of your application.
*/

try {
  window.$ = window.jQuery = require('jquery');

  require('bootstrap-sass');
} catch (e) {
  console.error('Cannot load jQuery and Boostrap jQuery plugin');
}

/**
* We'll load the axios HTTP library which allows us to easily issue requests
* to our Laravel back-end. This library automatically handles sending the
* CSRF token as a header based on the value of the "XSRF" token cookie.
*/

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
* Next we will register the CSRF Token as a common header with Axios so that
* all outgoing HTTP requests automatically have it attached. This is just
* a simple convenience so we don't have to attach every token manually.
*/

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.csrf_token = token.content;
  // window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;

  //Add Authorization into Request headers of axios
  window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + AuthenticationUtils.getAccessToken();
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
* Echo exposes an expressive API for subscribing to channels and listening
* for events that are broadcast by Laravel. Echo and event broadcasting
* allows your team to easily build robust real-time web applications.
*/

Vue.use(VueI18n);

window.Echo = new Echo({
  broadcaster: 'socket.io',
  host: ECHO_URL + ':6001',
  authe: {
    headers: {
      Authorization: `Bearer ${AuthenticationUtils.getAccessToken()}`,
    }
  }
});

const DEFAULT_USER_LOCALE = {lang: 'en'};

const localeStorage = LocalStorageUtils.getItem('user.locale') || DEFAULT_USER_LOCALE;
const locale = localeStorage.lang;
document.documentElement.setAttribute('lang', locale);

console.log("locale: ", locale);

window.i18n = new VueI18n({
  locale,
  messages,
});
