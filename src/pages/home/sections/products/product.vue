<template>
  <div class="product">
    <div class="thumbnail">
      <img class="img-fluid" :src="data.thumbnail.src" :alt="data.thumbnail.alt">
    </div>
    <div class="title">{{ data.name }}</div>
    <div class="price">{{ data.price | currency }}<sup>đ</sup></div>
  </div>
</template>

<script>
  import store from '@/store/index'

  export default {
    props: {
      data: {
        default: function () {
          return { }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .product {
    text-align: center;

    .thumbnail {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      margin-bottom: 1.125rem;
    }

    .title {
      color: #000000;
      font-size: 1.25rem;
      font-family: 'Bloom';
      font-weight: 700;
      font-style: italic;
      margin-bottom: 0.25rem;
    }
    .price {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0.875rem;
    }
  }
</style>
