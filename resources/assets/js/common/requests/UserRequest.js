import BaseModelRequest from '../lib/BaseModelRequest';

export default class UserRequest extends BaseModelRequest {
  getModelName() {
    return 'users'
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

  getCurrentUser(useCache = false, params) {
    if(this.user && useCache) {
      return new Promise((resolve) => {
        resolve(this.user);
      });
    }

    return new Promise((resolve, reject) => {
      const url = '/user';
      const self = this;
      this.get(url, params).then((user) => {
        self.user = user;
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      })
    })
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

  getInformartion(params) {
    const url ='/user-security-level';
    return this.get(url, params);
  }

  generalQrCode(params) {
    const url ='/general-qr-code';
    return this.get(url, params);
  }


}
