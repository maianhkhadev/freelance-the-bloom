<template>
  <div class="combo">
    <img class="img-fluid" :src="data.thumbnail.src" :alt="data.thumbnail.alt">
    <div class="title"><span>{{ data.name }}</span></div>
    <div class="price">{{ data.price | currency }}<sup>đ</sup></div>
    <button-bloom v-on:click.native="viewDetail">Xem giỏ quà</button-bloom>
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
      font-size: 1.875rem;
      font-family: 'Bloom';
      font-style: italic;
      line-height: 1.1;

      span {
        font-size: 3.125rem;
        font-family: 'Dance';
        font-style: normal;
        margin-left: 0.25rem;
      }
    }
    .price {
      color: #7d644b;
      font-size: 1.25rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
  }
</style>
