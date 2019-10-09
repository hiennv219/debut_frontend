import BaseModelRequest from '../lib/BaseModelRequest';

export default class UserRequest extends BaseModelRequest {
  getModelName() {
    return 'notes'
  }

  create(params) {
    const url = this.getUrl();
    return this.post(url, params);
  }

  getLists(params) {
    const url = this.getUrl();
    return this.get(url, params);
  }

}
