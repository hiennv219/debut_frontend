import BaseModelRequest from '../lib/BaseModelRequest';

export default class UserRequest extends BaseModelRequest {
  getModelName() {
    return 'users'
  }

  login(email, password, otp = '') {
    let params = {
      grant_type: 'password',
      client_id: process.env.MIX_CLIENT_ID,
      client_secret: process.env.MIX_CLIENT_SECRET,
      domain: window.location.host,
      username: email,
      password: password,
      scope: '*',
      otp: otp
    }
    return this.post('/oauth/token', params);
  }

  getCurrentUser(useCache = true, params) {
    if (this.user && useCache) {
      return new Promise((resolve, reject) => {
        resolve(this.user);
      });
    }

    return new Promise((resolve, reject) => {
      let url = '/user';
      this.get(url, params)
        .then((user) => {
          this.user = user;
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

}
