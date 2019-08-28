<template>
  <div>
    <div class="nk-wrap">
      <navigation/>
      <main class="nk-pages">
        <router-view></router-view>
      </main>
    </div>
    <div class="preloader">
  		<span class="spinner spinner-round"></span>
  	</div>
  </div>
</template>

<script>
import Navigation from '../layouts/Navigation';

export default {
  name: 'BaseApp',
  components: {
    Navigation
  }
}


</script>


<style lang="scss" scoped>

</style>
