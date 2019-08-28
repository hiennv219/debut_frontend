<template>
  <div class="">
      <h1>{{ appTitle }}</h1>
      <p>Landing page in VueJS</p>
      {{ $t('window_title')}}
  </div>
</template>

<script>
import {mapState, mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState(['appTitle'])
  },
  mounted() {

  }
}
</script>

<style lang="css" scoped>
</style>
