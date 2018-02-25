<template>
  <div class="product">
    <img class="img-fluid" :src="data.thumbnail.src" :alt="data.thumbnail.alt">
    <a class="title" href="#" v-on:click.prevent="viewDetail">{{ data.name }}</a>
    <div class="price">{{ data.price | currency }}<sup>đ</sup></div>
    <button-add-one v-on:add="add">Thêm vào giỏ</button-add-one>
    <a class="view-detail" href="#" v-on:click.prevent="viewDetail">Xem chi tiết</a>
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

        // ADD GTM
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          'Homepage+button': 'Homepage+button+click+Them_vao_gio'
        })
      },
      viewDetail: function () {
        let self = this
        $(`#product-detail-${self.data.code}`).modal('show')
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

    .view-detail {
      display: block;
      color: rgba(#000000, 0.6);
      font-size: 1.125rem;
      font-weight: 700;
    }
  }
</style>
