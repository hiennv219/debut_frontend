<template>
  <div class="">
    <div class="section section-l">
        <div class="container">
            <div class="nk-blocks d-flex justify-content-center">
                <div class="ath-container m-0">
                    <div class="ath-body">
                        <h5 class="ath-heading title">Sign Up<small class="tc-default">Create New TRT Wallet Account</small></h5>
                        <form action="./">
                            <div class="field-item">
                                <div class="field-wrap">
                                    <input type="text" class="input-bordered" placeholder="ID(Email)">
                                </div>
                            </div>

                            <div class="field-item">
                                <div class="field-wrap">
                                    <input type="password" class="input-bordered" placeholder="Password">
                                </div>
                            </div>
                            <div class="field-item">
                                <div class="field-wrap">
                                    <input type="password" class="input-bordered" placeholder="Repeat Password">
                                </div>
                            </div>
                             <div class="field-item">
                                <div class="field-wrap">
                                    <input type="text" class="input-bordered" placeholder="National">
                                </div>
                            </div>
                             <div class="field-item">
                                <div class="field-wrap">
                                    <input type="text" class="input-bordered" placeholder="Tel">
                                </div>
                            </div>
                            <div class="field-item">
                                <input class="input-checkbox" id="agree-term-2" type="checkbox">
                                <label for="agree-term-2">I agree to Icos <a href="#">Privacy Policy</a> &amp; <a href="#">Terms</a>.</label>
                            </div>
                            <button class="btn btn-primary btn-block btn-md">Sign Up</button>
                        </form>

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
export default {
  mounted() {
    //do something after mounting vue instance
  }
}
</script>

<style lang="css" scoped>
</style>
