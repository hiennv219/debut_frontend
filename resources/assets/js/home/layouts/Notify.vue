<template>
  <div class="">

  </div>
</template>

<script>

window.notifyApp = {
  show: (content) => {
    window.app.$broadcast('showNotifyApp', content);
  }
}

export default {
  data() {
    return {
    }
  },
  created() {
    this.$on('showNotifyApp', (content)=> {
      this.$toasted.show(content, {
      	 theme: "toasted-primary",
      	 position: "top-right",
      	 duration : 1000,
     });
    });
  }
}
</script>

<style lang="css" scoped>
  .input-bordered.is-invalid{
    border: 1px solid red;
  }
</style>
