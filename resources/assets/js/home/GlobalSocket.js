import Vue from 'vue';


export default class GlobalSocket {

  constructor() {

    this.subscribePublicChannels();

    if(window.isAuthenticated) {
      this.subscribePrivateChannels();
    }

    Vue.mixin({
      mounted: function () {
        if (this.getSocketEventHandlers) {
          window._.forIn(this.getSocketEventHandlers(), (handler, eventName) => {
            this.$on(eventName, handler);
          });
        }
      },
      beforeDestroy() {
        if (this.getSocketEventHandlers) {
          window._.forIn(this.getSocketEventHandlers(), (handler, eventName) => {
            this.$off(eventName, handler);
          });
        }
      }
    });
  }

  subscribePublicChannels() {
    this.listenForNote()
  }

  subscribePrivateChannels() {

  }

  listenForNote() {
    window.Echo
          .channel('app.public')
          .listen('NoteUpdated', (res) => {
            window.app.$broadcast('NoteUpdated', res.data);
          });
  }
}
