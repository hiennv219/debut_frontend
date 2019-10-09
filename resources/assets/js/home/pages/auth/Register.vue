<template>
  <div class="">
    <div class="section section-l">
        <div class="container">
            <div class="nk-blocks d-flex justify-content-center">
                <div class="ath-container m-0">
                    <div class="ath-body" v-if="tab === 1">
                        <h5 class="ath-heading title">Sign Up<small class="tc-default">Create New TRT Wallet Account</small></h5>
                            <div class="field-item">
                                <div class="field-wrap">
                                    <input type="text" class="input-bordered" :placeholder="$t('login_page.email')"
                                      v-model="email"
                                      name="email"
                                      @focus="clearErrors"
                                      v-validate.disabled="'required|email|max:190'">
                                    <div class="text-errors" :class="errors.has('email') ? 'text-danger' : ''">
                                      {{ errors.first('email') }}
                                    </div>
                                </div>
                            </div>

                            <div class="field-item">
                                <div class="field-wrap">
                                    <input type="password" class="input-bordered" :placeholder="$t('login_page.password')"
                                      v-model="password"
                                      name="password"
                                      ref="password"
                                      @focus="clearErrors"
                                      v-validate.disable="'required|min:6|max:190|regex:^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!#<>&@%+$*._-]).+$'">
                                    <div class="text-errors" :class="errors.has('password') ? 'text-danger' : ''">
                                        {{ errors.first('password') }}
                                    </div>
                                </div>
                            </div>
                            <div class="field-item">
                                <div class="field-wrap">
                                    <input type="password" class="input-bordered" :placeholder="$t('login_page.c_password')"
                                        v-model="c_password"
                                        name="confirm password"
                                        @focus="clearErrors"
                                        v-validate.disabled="'required|confirmed:password'">
                                    <div class="text-errors" :class="errors.has('confirm password') ? 'text-danger' : ''">
                                        {{ errors.first('confirm password') }}
                                    </div>
                                </div>
                            </div>
                            <div class="field-item">
                                <div class="">
                                  <input type="checkbox" class="input-checkbox" id="agree-term-2"
                                    name="agree"
                                    @focus="clearErrors"
                                    v-validate.disabled="'required'">
                                  <label for="agree-term-2">I agree to Icos <a href="#">Privacy Policy</a> &amp; <a href="#">Terms</a>.</label>
                                </div>
                                <div class="text-errors" :class="errors.has('agree') ? 'text-danger' : ''">
                                    {{ errors.first('agree') }}
                                </div>
                            </div>
                            <button @click="register()" class="btn btn-primary btn-block btn-md">Sign Up</button>
                        <div class="ath-note text-center">
                            Already have an account? <a href="page-login-v2.html"> <strong>Sign in here</strong></a>
                        </div>
                    </div>
                    <div class="ath-body" v-if="tab === 2">
                        <h5 class="ath-heading title">Authentication number</h5>
                            <div class="field-item">
                               <div class="field-wrap">
                                   <input type="text" class="input-bordered" :placeholder="$t('login_page.code')"
                                      v-model="code"
                                      name="code"
                                      @focus="clearErrors"
                                      v-validate.disable="'required|regex:^([0-9]{6})$'">
                                    <div :class="errors.has('code') ? 'text-danger' : ''" class="text-errors">
                                      {{ errors.first('code') }}
                                    </div>
                               </div>
                           </div>
                            <button @click="emailVerify()" class="btn btn-primary btn-block btn-md">Confirm</button>
                    </div>
                    <div class="ath-body" v-if="tab === 3">
                        <h5 class="ath-heading title">Email verified success!</h5>
                        <a href="/login" class="btn btn-primary btn-block btn-md">Login</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import rf from 'common/requests/RequestFactory.js';
import Utils from 'common/lib/Utils.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      c_password: '',
      tab: 1,
      code: '',
    }
  },
  methods: {
    clearErrors() {
      this.errors.clear();
    },
    register() {
      this.$validator.validate().then(async (result) => {
        if(!result) {
          return;
        }

        const params = {
          email: this.email,
          password: this.password,
          c_password: this.c_password,
        };
        rf.getRequest('UserRequest').register(params).then(res => {
          if(res.data) {
            this.tab = 2;

            window.notifyApp.show();
            console.log('Code: ', res.data);
          }
        }).catch((error) => {
          window._.forOwn(error.response.data.message, (message, field) => {
            this.$validator.errors.add({
              field: field,
              msg: message[0],
            });
          });
        });

      });
    },
    emailVerify() {
      this.$validator.validate().then(async (result) => {
        if(!result) {
          return;
        }
        const params = {
          code: this.code,
          email: this.email
        }
        rf.getRequest('UserRequest').emailVerify(params).then(res => {
          console.log(res)
          this.tab = 3;
        }).catch((error) => {
          console.log(error);
        });
      });
    }
  }
}
</script>

<style lang="css" scoped>
  .text-errors{
    font-size: 14px;
    padding-left: 3px;
  }

</style>
