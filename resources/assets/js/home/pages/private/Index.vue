<template>
  <div class="">
      <h2 class="text-center title-home-page">Private Space</h2>
      <p class="text-center text-gray">{{ $t('index_page.welcome') }}</p>

  </div>
</template>

<script>
import {mapState, mapGetters } from 'vuex';

export default {
  name: 'PrivateSpace',
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

<style lang="css" scoped>
.title-home-page{
  margin-top: 50px;
}
</style>
