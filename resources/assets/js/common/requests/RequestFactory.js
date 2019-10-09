import UserRequest from './UserRequest';
import NoteRequest from './NoteRequest';
import AuthenticatorRequest from './AuthenticatorRequest';

const requestMap = {
  UserRequest,
  AuthenticatorRequest,
  NoteRequest,
};

const instances = {};

export default class RequestFactory {

  static getRequest(classname) {
    let RequestClass = requestMap[classname];
    if (!RequestClass) {
      throw new Error('Invalid request class name: ' + classname);
    }

    let requestInstance = instances[classname];
    if (!requestInstance) {
        requestInstance = new RequestClass();
        instances[classname] = requestInstance;
    }

    return requestInstance;
  }

}
