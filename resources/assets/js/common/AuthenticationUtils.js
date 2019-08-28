import zlib from 'browserify-zlib';
import buffer from 'buffer';

const masterdataVersionKey = 'masterdata_version';
const masterdataKey = 'masterdata';

export default class AuthenticationUtils {

  static isAuthenticated() {
    AuthenticationUtils.loadDataIfNeed();
    return !!AuthenticationUtils.accessToken;
  }

  static saveAuthenticationData(data) {
    window.localStorage.setItem('access_token', data.access_token || '');
    AuthenticationUtils.accessToken = data.access_token || '';
  }

  static removeAuthenticationData() {
    AuthenticationUtils.saveAuthenticationData({});
    AuthenticationUtils.accessToken = '';
    window.app.$store.commit('updateIsAuthenticated', false);
  }

  static getAccessToken() {
    AuthenticationUtils.loadDataIfNeed();

    return AuthenticationUtils.accessToken;
  }

  static loadData() {
    AuthenticationUtils.accessToken = window.localStorage.getItem('access_token') || '';
    AuthenticationUtils.dataLoaded = true;
  }

  static loadDataIfNeed() {
    if (AuthenticationUtils.dataLoaded === undefined || !AuthenticationUtils.dataLoaded) {
      AuthenticationUtils.loadData();
    }
  }
};
