<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 mx-auto">
          <div class="title">Tet’s Gift Sets</div>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
    text-align: center;
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
      top: -3.5rem;
      right: 0;
      z-index: -1;
    }
    .deco-02 {
      position: absolute;
      top: 15%;
      left: 0;
      z-index: -1;
    }
  }
</style>
