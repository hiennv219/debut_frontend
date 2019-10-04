<template>
  <div class="">
    <div class="section section-l">
			<div class="container">
				<div class="nk-blocks d-flex justify-content-center">
					<div class="ath-container m-0">
						<div class="ath-body">
							<h5 class="ath-heading title">{{ titleForm }}</h5>
                <div v-show="step === 1">
  								<div class="field-item">
  									<div class="field-wrap">
  										<input v-model="email"
                        v-validate.disable="'required|email|max:190'"
                        name="email"
                        :class="errors.has('email') ? 'is-invalid': ''"
                        type="text" class="input-bordered"
                        @keyup.enter="login"
  											placeholder="Your Email">
  									</div>
                    <div :class="errors.has('email') ? 'text-danger' : ''" class="warning-message" >
                      <span>{{ errors.first('email') }}</span>
                    </div>
  								</div>
  								<div class="field-item">
  									<div class="field-wrap">
  										<input v-model="password"
                        v-validate.disabled="'required|max:190'"
                        name="password"
                        :class="errors.has('email') ? 'is-invalid': ''"
                        type="password" class="input-bordered"
                        @keyup.enter="login"
  											placeholder="Password">
  									</div>
                    <div :class="errors.has('password') ? 'text-danger' : ''" class="warning-message" >
                      <span>{{ errors.first('password') }}</span>
                    </div>
  								</div>
								</div>
                <div v-if="step === 2">
                  <div class="field-item">
                    <div class="field-wrap">
                      <input type="text" class="input-bordered" :placeholder="$t('login_page.code')"
                        v-model="otp"
                        name="otp"
                        @focus="clearErrors"
                        @keyup.enter="login"
                        maxlength="6"
                        data-vv-scope="google_otp"
                        v-validate.disable="'required|regex:^([0-9]{6})$'">
                      <div :class="errors.has('otp') ? 'text-danger' : ''" class="text-errors">
                        {{ errors.first('otp') }}
                      </div>
                    </div>
                  </div>
    						</div>

								<div
									class="field-item d-flex justify-content-between align-items-center">
									<div class="field-item pb-0">
										<input v-model="remenber" class="input-checkbox" id="remember-me-100"
											type="checkbox"> <label for="remember-me-100">Remember
											Me</label>
									</div>
									<div class="forget-link fz-6">
										<a href="page-reset-v2.html">Forgot password?</a>
									</div>
								</div>
								<button @click="login" class="btn btn-primary btn-block btn-md">Sign In</button>


							<div class="ath-note text-center">
								Don’t have an account? <a href="page-register-v2.html"> <strong>Sign
										up here</strong></a>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import rf from 'common/requests/RequestFactory';
import AuthenticationUtils from 'common/AuthenticationUtils';

export default {
  data() {
    return {
      titleForm: 'Sign In',
      email: '',
      password: '',
      remenber: '',
      step: 1,
      otp: ''
    }
  },
  methods: {
    clearErrors() {
      this.errors.clear();
    },
    login() {
      this.$validator.validate().then(async (result) => {
        if (!result) {
          return;
        }

        const params = {
          username: this.email,
          password: this.password,
          otp: this.otp
        };

        rf.getRequest('UserRequest').login(params).then(res => {
          AuthenticationUtils.saveAuthenticationData(res);
          this.getMessage("Success!");
          window.location.href = '/private-space';
        }).catch((error) => {

          //Enable OTP
          window._.forOwn(error.response.data.errors, (message, field) => {
            console.log(field);
            if(field == 'otp') { //If user have used OTP then active login again
              this.step = 2;
              this.titleForm = 'Google Authentication';
            }
          });

        });
      });

    },
    getMessage(msg) {
      this.$toasted.show("welcome to login page", {
      	 theme: "toasted-primary",
      	 position: "top-right",
      	 duration : 1000,
      });
    }
  },
  mounted() {
    this.getMessage("welcome to login page");

    this.$on('UserSessionRegistered', (data) => {
      console.log("UserSessionRegistered", data);
    });
  }
}
</script>

<style lang="css" scoped>
  .input-bordered.is-invalid{
    border: 1px solid red;
  }
</style>
