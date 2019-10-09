import BaseModelRequest from '../lib/BaseModelRequest';

export default class AuthenticatorRequest extends BaseModelRequest {
  getModelName() {
    return '/authenticator'
  }

  otpVerify(params) {
    const url = this.getModelName() + '/verify-otp';
    return this.post(url, params);
  }

  disableOtp(params) {
    const url = this.getModelName() + '/disable-otp';
    return this.post(url, params);
  }

  generalQrCode(params) {
    const url = this.getModelName() + '/general-otp';
    return this.get(url, params);
  }

}
