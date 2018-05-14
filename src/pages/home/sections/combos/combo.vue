<template>
  <div class="combo">
    <div class="thumbnail">
      <img class="img-fluid" :src="data.thumbnail.src" :alt="data.thumbnail.alt">
    </div>
    <div class="title">{{ data.name }}</div>
    <div class="price">{{ data.price | currency }}<sup>đ</sup></div>
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
    }
  }
</script>

<style lang="scss" scoped>
  .combo {
    text-align: center;
    margin-bottom: 3.5rem;

    .thumbnail {
      border-radius: 1.25rem;
      padding-left: 1rem;
      padding-right: 1rem;
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
