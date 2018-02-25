<template>
  <div class="combo">
    <img class="img-fluid" :src="data.thumbnail.src" :alt="data.thumbnail.alt">
    <div class="title" v-html="data.name"></div>
    <div class="price">{{ data.price | currency }}<sup>đ</sup></div>
    <button-bloom v-on:click.native="viewDetail">Xem chi tiết</button-bloom>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        default: function () {
          return { }
        }
      }
    },
    methods: {
      viewDetail: function () {
        let self = this
        $(`#combo-detail-${self.data.code}`).modal('show')
      }
    }
  }
</script>

<style lang="scss">
  .combo .title span {
    color: #dc4551;
  }
</style>

<style lang="scss" scoped>
  .combo {
    text-align: center;
    margin-bottom: 3.5rem;

    img {
      border-radius: 1.25rem;
      margin-bottom: 1.125rem;
    }
    .title {
      color: #7d644b;
      font-size: 3.125rem;
      font-family: 'Dance';
      font-style: normal;
      line-height: 1.1;
    }
    .price {
      color: #7d644b;
      font-size: 1.25rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
  }
</style>
