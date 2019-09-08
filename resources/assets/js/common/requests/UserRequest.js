import BaseModelRequest from '../lib/BaseModelRequest';

export default class UserRequest extends BaseModelRequest {
  getModelName() {
    return 'users'
  }

  register(params) {
    const url = '/register';
    return this.post(url, params);
  }

}
