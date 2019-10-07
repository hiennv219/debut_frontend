import Vue from 'vue';

Vue.filter('getUserName', (value) => {
  if(value) {
    return value.replace(/@.*$/,"");
  }
});
