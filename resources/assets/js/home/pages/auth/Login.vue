<template>
  <div class="">
    <div class="section section-l">
			<div class="container">
				<div class="nk-blocks d-flex justify-content-center">
					<div class="ath-container m-0">
						<div class="ath-body">
							<h5 class="ath-heading title">
								Sign In<small class="tc-default">with your TRT Wallet</small>
							</h5>
								<div class="field-item">
									<div class="field-wrap">
										<input  v-model="email" type="text" class="input-bordered"
											placeholder="Your Email">
									</div>
								</div>
								<div class="field-item">
									<div class="field-wrap">
										<input v-model="password" type="password" class="input-bordered"
											placeholder="Password">
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
      email: '',
      password: '',
      remenber: ''
    }
  },
  methods: {
    login() {
      const params = {
        email: this.email,
        password: this.password
      };

      rf.getRequest('UserRequest').login(params).then(res => {
        AuthenticationUtils.saveAuthenticationData(res.data);
        window.location.href = '/homie';
      }).catch((error) => {
        console.log("ERROR.", error);
      });
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.$toasted.show("welcome to login page", {
    	 theme: "toasted-primary",
    	 position: "top-right",
    	 duration : 1000,
    });

    this.$on('UserSessionRegistered', (data) => {
      console.log("UserSessionRegistered", data);
    });
  }
}
</script>

<style lang="css" scoped>
</style>
