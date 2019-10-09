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
    <notify/>
  </div>
</template>

<script>
import Navigation from '../layouts/Navigation';
import Notify from '../layouts/Notify';

export default {
  name: 'BaseApp',
  components: {
    Navigation,
    Notify
  }
}


</script>


<style lang="scss" scoped>

</style>
