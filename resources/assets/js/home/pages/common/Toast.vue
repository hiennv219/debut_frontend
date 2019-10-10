<template>
  <div class="">

  </div>
</template>

<script>

export default {
  name: "Toast",
  props: ['message'],
  watch: {
    message: function () {
        this.getMessage();
    }
  },
  methods: {
    getMessage() {
      this.$toasted.show( this.message, {
      	 theme: "toasted-primary",
      	 position: "bottom-right",
      	 duration : 2000,
      });
      this.display = false;
    }
  },
  mounted() {
  }
}
</script>

<style lang="css" scoped>
  .input-bordered.is-invalid{
    border: 1px solid red;
  }
</style>
