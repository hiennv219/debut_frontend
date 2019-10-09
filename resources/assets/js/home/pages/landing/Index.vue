<template>
  <div class="">
      <h2 class="text-center title-home-page">{{ $t('window_title')}}</h2>
      <p class="text-center text-gray">{{ $t('index_page.welcome') }}</p>

      <div class="text-center">
        <router-link to="/login" class="btn btn-primary">
          {{ $t('index_page.login') }}
        </router-link>
        <router-link to="/register" class="btn btn-success">
          {{ $t('index_page.register') }}
        </router-link>
      </div>

  </div>
</template>

<script>
import {mapState, mapGetters } from 'vuex';

export default {
  name: 'LandingPage',
  computed: {
    ...mapState(['appTitle'])
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
