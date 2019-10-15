<template>
  <div class="news">
    <note :type="type"></note>
    <create-note></create-note>
    <toast :message="notify"></toast>
  </div>
</template>

<script>
import {mapState, mapGetters } from 'vuex';
import rf from 'common/requests/RequestFactory.js';
import Note from '../note/Index';
import CreateNote from '../common/CreateNote';
import Toast from '../common/Toast';

export default {
  name: 'NewsFeed',
  components: {
    Note,
    CreateNote,
    Toast
  },
  data() {
    return {
      isShow: false,
      notify: "",
      type: "private",
    }
  },
  computed: {
    ...mapState([
      'appTitle',
      'isAuthenticated',
    ])
  },
  methods: {
    getSocketEventHandlers() {
      return {
        NoteUpdated: this.onReceiveNote
      }
    },
    onReceiveNote(data) {
      this.isShow = true;
      this.notify = "New Note of anonymous user: \"" + data.title + "\"";
    },
    getNotes() {
      rf.getRequest('NoteRequest').getLists().then(res => {
        this.notes = res.data;
      }).catch((error) => {

      });
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
