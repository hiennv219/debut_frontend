<template>
  <div class="news">
    <note></note>
    <create-note></create-note>
  </div>
</template>

<script>
import {mapState, mapGetters } from 'vuex';
import Note from './Note';
import CreateNote from '../common/CreateNote';

export default {
  name: 'NewsFeed',
  components: {
    Note,
    CreateNote
  },
  computed: {
    ...mapState([
      'appTitle',
      'isAuthenticated',
    ])
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
</style>
