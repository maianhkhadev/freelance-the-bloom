<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 ml-auto">
          <div class="title">ĐẶT HÀNG NGAY, NHẬN 'LÌ XÌ'</div>
          <div class="content">
            <p>Đặt ngay sản phẩm quà tết <b>trước ngày 20 tháng 1 năm 2018</b> để nhận <b>5% chiết khấu</b> cho hóa đơn từ 1.4 triệu trở lên.</p>
          </div>
          <div class="time">
            Còn
            {{ countdown.d }}<small> ngày</small>
            {{ countdown.h }}<small> giờ</small>
            {{ countdown.m }}<small> phút</small>
          </div>
        </div>
        <div class="col-xl-3 mr-auto d-none d-xl-block">
          <img class="img-fluid w-100" src="~@/assets/images/pages/home/sections/deal/product.png" alt="">
        </div>
      </div>
    </div>

    <img class="deco-01" src="~@/assets/images/pages/home/sections/deal/deco-01.png" alt="">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        countdown: { d: 0, h: 0, m: 0 }
      }
    },
    mounted () {
      let self = this
      let countDownDate = new Date("Jan 20, 2018 00:00:00").getTime();

      setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        self.countdown.d = Math.floor(distance / (1000 * 60 * 60 * 24))
        self.countdown.h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        self.countdown.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      }, 1000)
    }
  }
</script>

<style lang="scss" scoped>
  .section {
    position: relative;
    background-image: url('~@/assets/images/pages/home/sections/deal/bim.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 12rem;
    padding-bottom: 12rem;

    @media screen and (max-width: 600px) {
      background-color: #f2e1be;
      background-image: unset;
      padding-top: 6rem;
      padding-bottom: 6rem;
    }

    .title {
      color: #7d644b;
      font-size: 1.875rem;
      font-family: 'Bloom';
      font-weight: 700;
      margin-bottom: 1.25rem;
    }
    .content {
      color: rgba(#000000, 0.6);
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 2rem;

      b {
        font-size: 1.125rem;
      }
    }
    .time {
      color: #7d644b;
      font-size: 2.5rem;
      line-height: 1.1;
    }
    .deco-01 {
      position: absolute;
      top: 0;
      right: 0;
      // z-index: -1;

      @media screen and (max-width: 600px) {
        display: none;
      }
    }
  }
</style>
