<template>
  <div class="section section-l">
			<div class="container">
				<div class="nk-blocks d-flex justify-content-center">
					<div class="otp-middle m-0">
            <div class="ath-body">
                <h5 class="ath-heading title">{{ titleForm }}</h5>
                <div class="field-item" v-if="securityLevel === 1">
                  <div class="field-wrap qrcode">
                    <img :src="QrCode" alt="" class="img-qr">
                    <div class="">
                      <label class="text-danger">Tips:</label>
                      <label>1. Scan the QR code on the left or enter Google secret key</label>
                      <label>2. Enter Google two-factor Authentication</label>
                      <label>3. Please save your Google key, it will be used to recover yor Google Authenticator</label>
                    </div>
                  </div>
                </div>
                <div class="field-item">
                  <div class="field-wrap">
                    <input type="text" class="input-bordered" :placeholder="$t('login_page.code')"
                      v-model="code"
                      name="code"
                      @focus="clearErrors"
                      @keyup.enter="otpVerify"
                      maxlength="6"
                      v-validate.disable="'required|regex:^([0-9]{6})$'">
                    <div :class="errors.has('code') ? 'text-danger' : ''" class="text-errors">
                      {{ errors.first('code') }}
                    </div>
                  </div>
                </div>
                <button @click="otpVerify" class="btn btn-primary btn-block btn-md">Confirm</button>

                <div class="field-wrap guide">
                  <img src="images/otp.png" alt="" class="otp-guide">
                  <p>Download the free <a href="https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en" target="_blank">Google Authenticator</a> app, Click add and then scan this barcode to set up your account.</p>
                </div>
            </div>
					</div>
				</div>
			</div>
  </div>
</template>

<script>
import {mapState, mapGetters } from 'vuex';
import rf from 'common/requests/RequestFactory';
import AuthenticationUtils from 'common/AuthenticationUtils';

export default {
  name: 'GoogleAuthenticator',
  computed: {
    ...mapState([
      'appTitle',
      'isAuthenticated',
    ])
  },
  data() {
    return {
      QrCode: '',
      code: '',
      securityLevel: 1,
    }
  },
  computed: {
    titleForm() {
      if(this.securityLevel >= 2) {
        return "Disable Google Authenticator";
      }
      return "Google Authenticator";
    },
  },
  methods: {
    clearErrors() {
      this.errors.clear();
    },
    otpVerify() {
      this.$validator.validate().then(async (result) => {
        if(!result) {
          return;
        }

        const params = {
          code: this.code
        };

        if(this.securityLevel == 1) {
          rf.getRequest('UserRequest').otpVerify(params).then(res => {

          });
        }else {
          rf.getRequest('UserRequest').disableOtp(params).then(res => {

          });
        }
      });
    },
    generalQrCode() {
      rf.getRequest('UserRequest').generalQrCode().then(res => {
        this.QrCode = res;
      });
    },
    getInformartion() {
      return rf.getRequest('UserRequest').getInformartion().then(res => {
        this.securityLevel = res.data.security_level;
      });
    },
    init() {
      this.getInformartion();

      if(this.securityLevel === 1) {
        this.generalQrCode();
      }
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style lang="scss" scoped>
.otp-middle{
  width: 590px;
}
.title-home-page{
  margin-top: 50px;
}
.qrcode {
  padding-bottom: 20px;
  .img-qr{
    float: left;
    margin-right: 20px;
  }
  label{
    display: block;
  }
}
.guide {
  margin-top: 15px;
  padding: 15px;
  background: #e3f5f5;
  border-radius: 3px;
  overflow: overlay;
}
.otp-guide{
  height: 80px;
  float: left;
  margin-right: 10px;
}
</style>
