<template>
  <div class="product">
    <img class="img-fluid" :src="data.thumbnail.src" :alt="data.thumbnail.alt">
    <div class="title">{{ data.name }}</div>
    <div class="price">{{ data.price | currency }}<sup>đ</sup></div>
    <button-add-one v-on:click.native="add">Thêm vào giỏ</button-add-one>
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
    },
    methods: {
      add: function () {
        let self = this
        store.commit('basket/add', self.data)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .product {
    text-align: center;

    img {
      margin-bottom: 1.125rem;
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
      margin-bottom: 1rem;
    }
  }
</style>
