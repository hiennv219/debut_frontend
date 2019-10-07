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
            <!-- <a href="./" class="logo-link"> <img class="logo-dark"
              src="images/beyond/logo.png" srcset="images/beyond/logo.png" alt="logo">
              <img class="logo-light" src="images/beyond/logo.png"
              srcset="images/beyond/logo.png" alt="logo">
            </a> -->
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

                <li class="menu-item" v-if="isAuthenticated">
                  <a class="menu-link nav-link menu-toggle" href="#">Account</a>
                  <div class="menu-sub menu-drop menu-mega menu-mega-2clmn">
                    <div class="menu-mega-innr">
                      <ul class="menu-mega-list">
                        <li class="menu-item"><a class="btn btn-primary">{{ user.email | getUserName }}</a></li>
                        <li class="menu-item"><a href="/private-space">Private Space</a> </li>
                        <li class="menu-item"><a href="/google-authenticator">OTP</a> </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li class="menu-item">
                  <a class="menu-link nav-link menu-toggle" href="#">Language</a>
                  <div class="menu-sub menu-drop menu-mega menu-mega-2clmn">
                    <div class="menu-mega-innr">
                      <ul class="menu-mega-list">
                        <li class="menu-item" v-for="locale in supportedLocales">
                          <a @click="updateUserLocale(locale)">{{ $t(`header.lang_${locale}`) }}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li class="menu-item" v-if="isAuthenticated">
                  <a class="menu-link nav-link menu-toggle" href="#"  @click="logout()">Logout</a>
                </li>

                <li class="menu-item" v-else>
                  <router-link to="/login" class="menu-link nav-link menu-toggle" >
                    {{ $t('index_page.login') }}
                  </router-link>
                </li>
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
import { mapState, mapActions } from 'vuex';
import Utils from 'common/lib/Utils';
import AuthenticationUtils from 'common/AuthenticationUtils';

export default {
  name: 'Navigation',
  components: {

  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'supportedLocales',
      'isAuthenticated',
      'user',
    ]),
  },
  methods: {
    logout() {
      AuthenticationUtils.removeAuthenticationData();
      window.location.href = '/';
    },
    updateUserLocale(locale) {
      Utils.setI18nLocale(locale);
    }
  },
  mounted() {
    if(this.isAuthenticated) {
      this.$store.dispatch('getCurrentUser');
    }
  }
}
</script>

<style lang="css" scoped>
</style>
