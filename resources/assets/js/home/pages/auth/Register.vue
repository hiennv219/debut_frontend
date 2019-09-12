<template>
  <div class="">
    <div class="section section-l">
        <div class="container">
            <div class="nk-blocks d-flex justify-content-center">
                <div class="ath-container m-0">
                    <div class="ath-body">
                        <h5 class="ath-heading title">Sign Up<small class="tc-default">Create New TRT Wallet Account</small></h5>
                            <div class="field-item">
                               <div class="field-wrap">
                                   <input type="text" class="input-bordered" :placeholder="$t('login_page.name')"
                                      v-model="name"
                                      name="name"
                                      v-validate.disable="'required'">
                                    <div :class="errors.has('name') ? 'text-danger' : ''" class="text-errors">
                                      {{ errors.first('name') }}
                                    </div>
                               </div>
                           </div>
                            <div class="field-item">
                                <div class="field-wrap">
                                    <input type="text" class="input-bordered" :placeholder="$t('login_page.email')"
                                      v-model="email"
                                      name="email"
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
                                        v-validate.disabled="'required|confirmed:password'">
                                    <div class="text-errors" :class="errors.has('confirm password') ? 'text-danger' : ''">
                                        {{ errors.first('confirm password') }}
                                    </div>
                                </div>
                            </div>
                             <div class="field-item">
                                <div class="field-wrap">
                                    <input type="text" class="input-bordered" :placeholder="$t('login_page.tel')"
                                        v-model="phone"
                                        name="phone"
                                        v-validate.disabled="'required'">
                                    <div class="text-errors" :class="errors.has('phone') ? 'text-danger' : ''">
                                        {{ errors.first('phone')}}
                                    </div>
                                </div>
                            </div>
                            <div class="field-item">
                                <div class="">
                                  <input type="checkbox" class="input-checkbox" id="agree-term-2"
                                    name="agree"
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
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import rf from 'common/requests/RequestFactory.js';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      c_password: '',
      phone: '',
    }
  },
  methods: {
    register() {
      this.$validator.validate().then(async (result) => {
        if(!result) {
          return;
        }

        const params = {
          name: this.name,
          email: this.email,
          password: this.password,
          c_password: this.c_password,
          tel: this.tel
        };
        rf.getRequest('UserRequest').register(params).then(res => {
          console.log(res);
        }).catch((error) => {
          console.log(error);
        });

      });
    }
  },
  mounted() {
  }
}
</script>

<style lang="css" scoped>
  .text-errors{
    font-size: 14px;
    padding-left: 3px;
  }

</style>
