import BaseModelRequest from '../lib/BaseModelRequest';

export default class UserRequest extends BaseModelRequest {
  getModelName() {
    return 'users'
  }

  register(params) {
    const url = '/register';
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

}
