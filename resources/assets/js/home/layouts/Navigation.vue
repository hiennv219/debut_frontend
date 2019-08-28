<template>
  <header class="nk-header page-header is-transparent is-sticky is-shrink" id="header">
    <!-- Header @s -->
    <div class="header-main">
      <div class="header-container container">
        <div class="header-wrap">
          <!-- Logo @s -->
          <div class="header-logo logo">
            <a href="./" class="logo-link"> <img class="logo-dark"
              src="images/logo-wallet.png" srcset="images/logo-wallet.png" alt="logo">
              <img class="logo-light" src="images/logo-wallet.png"
              srcset="images/logo-wallet.png" alt="logo">
            </a>
          </div>

          <!-- Menu Toogle @s -->
          <div class="header-nav-toggle">
            <a href="#" class="navbar-toggle" data-menu-toggle="header-menu">
              <div class="toggle-line">
                <span></span>
              </div>
            </a>
          </div>

          <!-- Menu @s -->
          <div class="header-navbar">
            <nav class="header-menu" id="header-menu">
              <ul class="menu">

                <li class="menu-item"><a
                  class="menu-link nav-link menu-toggle" href="#">Language</a>
                  <div class="menu-sub menu-drop menu-mega menu-mega-2clmn">
                    <div class="menu-mega-innr">
                      <ul class="menu-mega-list">
                        <li class="menu-item" v-for="locale in supportedLocales">
                          <a @click="updateUserLocale(locale)">{{ $t(`header.lang_${locale}`) }}</a>
                        </li>
                      </ul>
                    </div>
                  </div></li>
              </ul>
            </nav>
          </div>
          <!-- .header-navbar @e -->
        </div>
      </div>
    </div>
    <!-- .header-main @e -->

    <!-- Banner @s -->
    <div class="header-banner bg-theme-grad"></div>
    <!-- .header-banner @e -->
  </header>
</template>

<script>
import { mapState } from 'vuex';
import Utils from 'common/lib/Utils';


export default {
  name: 'Navigation',
  components: {

  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['supportedLocales']),
  },
  methods: {
    updateUserLocale(locale) {
      Utils.setI18nLocale(locale);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
