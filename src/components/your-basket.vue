<template>
  <div class="your-basket" v-on:click="showSubmenu">
    <img class="icon" width="25" src="" alt="">
    <div style="flex: 1;">
      <div class="title">Your Basket</div>
      <div class="number">8 items</div>
    </div>

    <div class="sub-menu">
      <div class="media">
        <img class="align-self-center mr-3" src="" alt="">
        <div class="media-body">
          cdscds
        </div>
        <img class="align-self-center ml-3" src="" alt="">
      </div>
      <hr>
      xsdcdscds
      <hr>
      xsdcdscds
      <hr>
      <div class="">Tổng tiền</div>
      <div class="">5000000</div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      showSubmenu: function (event) {
        event.preventDefault()
        $('.sub-menu').slideToggle('fast')
      }
    },
    mounted () {
      let self = this
      $('.your-basket').on('click', function () {

      })
    }
  }
</script>

<style lang="scss" scoped>
  .your-basket {
    position: relative;
    display: flex;
    -webkit-box-align: start;
    align-items: flex-start;
    text-align: right;
    cursor: pointer;

    .icon {
      vertical-align: middle;
      border-style: none;
      margin-right: 1rem;
    }
    .title {

    }
    .number {

    }

    .sub-menu {
        display: none;
        position: absolute;
        top: 100%;
        right: 0;
        width: 150%;
        background-color: #f9f9f9;
        border-radius: 1rem;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 1rem;

        @media only screen and (max-width: 600px) {
          position: unset;
          background-color: unset;
          box-shadow: unset;
        }
      }
  }
</style>
