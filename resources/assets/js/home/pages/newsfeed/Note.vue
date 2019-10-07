<template>
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
      <h3 class="title">Bitcoin Price Analysis</h3>
      <span class="text-muted time">2019-10-07 17:30</span>
      <p>Bitcoin price is currently declining and is trading well below $8,000 against the US Dollar.</p>
        <p>The price is struggling to recover and it looks set to decline further towards the $7,500 support.</p>
        <p>There is a crucial declining channel forming with resistance near the $8,050 level on the hourly chart of the BTC/USD pair (data feed from Kraken).</p>
        <p>The price is likely to accelerate decline below the $7,800 and $7,750 levels in the near term.</p>
        <p>Bitcoin price is showing bearish signs below $8,000 against the US Dollar. BTC remains at a risk of an extended decline towards the $7,500 weekly target.</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .posts {
    padding: 50px;
    .post{
      background: #fff;
      border-radius: 8px;
      border: 1px solid #cdcdcd;
      width: 90%;
      margin-bottom: 50px;
      padding: 1rem 15px;

      .title{
        font-size: 1.25rem;
        margin-bottom: 0.7rem;
      }
      .time{
        font-size: 0.9rem;
      }

      p{
        font-size: 1.1rem;
      }
    }
    .post:nth-child(even) {
      float: right;
    }
  }

  .take-note{
    background-color: #23c99d;
    border-color: #23c99d;
    font-size: 13px;
    border-radius: 100%;
    height: 45px;
    width: 45px;
    position: fixed;
    top: 120px;
    left: 20px;
    color: #fff;
    font-weight: bold;

    &:hover{
      background-color: #16a3fe;
      border-color: #16a3fe;
    }
  }
  .form-note{
    .modal-body{
      border-radius: 0px !important;
    }
  }
</style>
