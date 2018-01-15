<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 mx-auto text-center">
          <div class="title">Giỏ quà Tết</div>
          <div class="content">
            <p>Gợi Ý Quà Tết Cho Bạn - một món quà ý nghĩa không cần quá cầu kì, sang trọng, chỉ cần đong đầy thành ý của người tặng.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <combos></combos>
        </div>
      </div>
    </div>
    <img class="deco-01" src="~@/assets/images/pages/home/sections/code-03/deco-01.png" alt="">
    <img class="deco-02" src="~@/assets/images/pages/home/sections/code-03/deco-02.png" alt="">
  </div>
</template>

<script>
  import Combos from './combos/index'

  export default {
    components: {
      'combos': Combos
    }
  }
</script>

<style lang="scss" scoped>
  .section {
    position: relative;
    padding-top: 6.5rem;
    padding-bottom: 5rem;

    .title {
      color: #dc4551;
      font-size: 3.75rem;
      font-family: 'Bloom';
      font-weight: 700;
      margin-bottom: 1.25rem;
    }
    .content {
      color: #87827c;
      font-size: 1rem;
      font-weight: 500;
    }
    .deco-01 {
      position: absolute;
      top: -6.5rem;
      right: 0;
      z-index: -1;

      @media screen and (max-width: 600px) {
        display: none;
      }
    }
    .deco-02 {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      @media screen and (max-width: 600px) {
        display: none;
      }
    }
  }
</style>
