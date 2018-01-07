<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-xl-7 ml-auto">
          <div class="title">Deal of the day</div>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div class="time">19:20:56</div>
        </div>
        <div class="col-xl-3">
          <img class="img-fluid" src="~@/assets/images/stores/products/im-04.png" alt="">
        </div>
      </div>
    </div>

    <img class="deco-01" src="~@/assets/images/pages/home/sections/deal/deco-01.png" alt="">
  </div>
</template>

<style lang="scss" scoped>
  .section {
    position: relative;
    padding-top: 5rem;
    padding-bottom: 5rem;

    .title {
      color: #7d644b;
      font-size: 1.875rem;
      font-family: 'Bloom';
      font-weight: 700;
      margin-bottom: 1.25rem;
    }
    .content {
      color: #87827c;
      font-size: 1rem;
      font-weight: 500;
    }
    .time {
      color: #87827c;
      font-size: 3.125rem;
    }
    .deco-01 {
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }
  }
</style>
