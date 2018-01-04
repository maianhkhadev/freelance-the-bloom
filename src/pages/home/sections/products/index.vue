<template>
  <div class="products">
    <div class="row">
      <div class="col-xl-3 col-sm-6">
        <product></product>
      </div>
      <div class="col-xl-3 col-sm-6">
        <product></product>
      </div>
      <div class="col-xl-3 col-sm-6">
        <product></product>
      </div>
      <div class="col-xl-3 col-sm-6">
        <product></product>
      </div>
    </div>
    <div class="line"></div>
    <div class="row">
      <div class="col-xl-3 col-sm-6">
        <product></product>
      </div>
      <div class="col-xl-3 col-sm-6">
        <product></product>
      </div>
      <div class="col-xl-3 col-sm-6">
        <product></product>
      </div>
      <div class="col-xl-3 col-sm-6">
        <product></product>
      </div>
    </div>
    <div class="line"></div>
    <div class="row">
      <div class="col-xl-3 col-sm-6">
        <product></product>
      </div>
      <div class="col-xl-3 col-sm-6">
        <product></product>
      </div>
      <div class="col-xl-3 col-sm-6">
        <product></product>
      </div>
      <div class="col-xl-3 col-sm-6">
        <product></product>
      </div>
    </div>
  </div>
</template>

<script>
  import Product from './product'

  export default {
    components: {
      'product': Product
    }
  }
</script>

<style lang="scss" scoped>
  .products {

    .col-xl-3:not(:first-child) {
      border-left: 0.125rem solid #e4dbcf;
    }

    .line {
      background-color: #e4dbcf;
      height: 0.125rem;
      margin-top: 3.125rem;
      margin-bottom: 3.125rem;
    }
  }
</style>
