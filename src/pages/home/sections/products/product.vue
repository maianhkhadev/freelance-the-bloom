<template>
  <div class="product">
    <div class="thumbnail">
      <img class="img-fluid" src="~@/assets/images/stores/products/im-04.png" alt="">
    </div>
    <div class="title">Than tre cành</div>
    <div class="price">219.000<sup>đ</sup></div>
    <div class="add-to-cart">
      <img class="img-fluid" src="~@/assets/images/pages/home/sections/products/button.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .product {
    text-align: center;

    .thumbnail {

      img {
        margin-bottom: 1.25rem;
      }
    }

    .title {
      font-size: 1.25rem;
      font-family: 'Bloom';
      font-weight: 700;
      font-style: italic;
      margin-bottom: 0.25rem;
    }

    .price {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 1.125rem;
    }
  }
</style>
