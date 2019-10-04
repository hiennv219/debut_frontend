import BaseModelRequest from '../lib/BaseModelRequest';

export default class UserRequest extends BaseModelRequest {
  getModelName() {
    return 'users'
  }

  register(params) {
    const url = '/register';
    return this.post(url, params);
  }

  emailVerify(params) {
    const url ='/email-verify';
    return this.post(url, params);
  }

  otpVerify(params) {
    const url = '/otp-verify';
    return this.post(url, params);
  }

  disableOtp(params) {
    const url = '/disable-otp';
    return this.post(url, params);
  }

  login(params) {
    let passport = {
      grant_type: 'password',
      client_id: process.env.MIX_CLIENT_ID,
      client_secret: process.env.MIX_CLIENT_SECRET,
      scope: '*'
    };
    params = { ...params, ...passport};
    const url = '/oauth/token';
    return this.post(url, params);
  }

  getInformartion(params) {
    const url ='/user';
    return this.get(url, params);
  }

  generalQrCode(params) {
    const url ='/general-qr-code';
    return this.get(url, params);
  }


}
