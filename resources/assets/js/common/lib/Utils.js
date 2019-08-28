import _ from 'lodash';
import { Validator } from 'vee-validate';
import BigNumber from 'bignumber.js';
import Numeral from './numeral';
import Localize from '../localize';
import LocalStorageUtils from '../LocalStorageUtils';

export default {

  setI18nLocale (locale) {
    LocalStorageUtils.saveItem('user.locale', {lang: locale});
    window.i18n.locale = locale;
    document.documentElement.setAttribute('lang', locale);
  },

  getTimzoneOffset () {
    const date = new Date();
    return date.getTimezoneOffset();
  },
}
