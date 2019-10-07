<template>
  <div class="">
      <div class="posts">
        <div class="post">
          <h3 class="title">Bitcoin Price (BTC) Extending Decline Below Key Support</h3>
          <span class="text-muted time">2019-10-07 17:30</span>
          <p>In the past few days, there was a steady decline in bitcoin form the $8,500 resistence against the US Dollar.
          The BTC/USD pair broke many support near $83,00 and $8,200 to enter a bearish zone.
          Moreover, there was a close below the $8,200 level and the 100 hourly simple moving averge.
          Recently, the bears gained traction and they were successful in pushing the price below the $8,000 support area.</p>
        </div>
        <div class="post">
          <h3 class="title">Bitcoin Price (BTC) Extending Decline Below Key Support</h3>
          <span class="text-muted time">2019-10-07 17:30</span>
          <p>In the past few days, there was a steady decline in bitcoin form the $8,500 resistence against the US Dollar.
          The BTC/USD pair broke many support near $83,00 and $8,200 to enter a bearish zone.
          Moreover, there was a close below the $8,200 level and the 100 hourly simple moving averge.
          Recently, the bears gained traction and they were successful in pushing the price below the $8,000 support area.</p>
        </div>
      </div>

  </div>
</template>

<script>
import {mapState, mapGetters } from 'vuex';

export default {
  name: 'PrivateSpace',
  computed: {
    ...mapState([
      'appTitle',
      'isAuthenticated',
    ])
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.title-home-page{
  margin-top: 50px;
}

.posts {
  padding: 50px;
  .post{
    background: #fff;
    border-radius: 8px;
    border: 1px solid #cdcdcd;
    width: 90%;
    margin-bottom: 50px;
    padding: 1rem 10px;

    .title{
      font-size: 1.25rem;
      margin-bottom: 0.7rem;
    }
    .time{
      font-size: 0.9rem0000000000000;
    }
  }
  .post:nth-child(even) {
    float: right;
  }
  .post:nth-child(odd) {

  }
}
</style>
