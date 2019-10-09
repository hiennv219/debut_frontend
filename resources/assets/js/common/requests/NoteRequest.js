import BaseModelRequest from '../lib/BaseModelRequest';

export default class UserRequest extends BaseModelRequest {
  getModelName() {
    return 'notes'
  }

  create(params) {
    const url ='/notes/take-a-note';
    return this.post(url, params);
  }

  getLists(params) {
    const url ='/notes';
    return this.get(url, params);
  }

}
