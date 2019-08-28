<template>
  <div class="">
      <p>Login</p>
  </div>
</template>

<script>
export default {
  mounted() {
    //do something after mounting vue instance
    this.$toasted.show("Toasted !!", {
    	 theme: "toasted-primary",
    	 position: "top-right",
    	 duration : 5000,
       icon : {
           name : 'watch',
       }
    });
  }
}
</script>

<style lang="css" scoped>
</style>
