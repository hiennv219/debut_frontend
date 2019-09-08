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
                                   <input v-model="name" type="text" class="input-bordered" placeholder="Name">
                               </div>
                           </div>
                            <div class="field-item">
                                <div class="field-wrap">
                                    <input v-model="email" type="text" class="input-bordered" placeholder="ID(Email)">
                                </div>
                            </div>

                            <div class="field-item">
                                <div class="field-wrap">
                                    <input v-model="password" type="password" class="input-bordered" placeholder="Password">
                                </div>
                            </div>
                            <div class="field-item">
                                <div class="field-wrap">
                                    <input v-model="c_password" type="password" class="input-bordered" placeholder="Repeat Password">
                                </div>
                            </div>
                             <div class="field-item">
                                <div class="field-wrap">
                                    <input v-model="phone" type="text" class="input-bordered" placeholder="Tel">
                                </div>
                            </div>
                            <div class="field-item">
                                <input class="input-checkbox" id="agree-term-2" type="checkbox">
                                <label for="agree-term-2">I agree to Icos <a href="#">Privacy Policy</a> &amp; <a href="#">Terms</a>.</label>
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
      const params = {
        name: this.name,
        email: this.email,
        password: this.password,
        c_password: this.c_password,
        tel: this.tel
      };
      rf.getRequest('UserRequest').register(params).then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log(error);
      });
    }
  },
  mounted() {
  }
}
</script>

<style lang="css" scoped>
</style>
