<template>
  <div class="section">
    <div class="your-basket" v-on:click="showSubmenu">
      <div class="media">
        <img class="icon" src="~@/assets/images/layouts/default/header/basket.png" alt="">
        <div class="media-content">
          <div class="title">Giỏ hàng</div>
          <div class="number">{{ total.amount }} sản phẩm</div>
        </div>
      </div>
    </div>
    <div class="basket-detail">
      <template v-for="order in orders">
        <div class="order">
          <div class="media">
            <img class="mr-2" width="45" :src="order.thumbnail.src" :alt="order.thumbnail.alt">
            <div class="media-content">
              <div class="title" v-html="order.name"></div>
              <div class="price">{{ order.price | currency }}<sup>đ</sup></div>
            </div>
            <span class="spinner">
              <span class="button" v-on:click="decrease(order)">-</span>
              <span class="amount">{{ order.amount }}</span>
              <span class="button" v-on:click="increase(order)">+</span>
            </span>
          </div>
        </div>
      </template>

      <div class="total">
        <div class="row">
          <div class="col">
            <div class="text">Tổng giá</div>
          </div>
          <div class="col">
            <div class="price">{{ total.price | currency }}<sup>đ</sup></div>
          </div>
          <div class="col">
            <button class="btn btn-brown btn-block" v-on:click="showCustomerModal">Mua hàng</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store/index'

  export default {
    computed: {
      orders () {
        return store.getters['basket/orders']
      },
      total: function () {
        let orders = store.getters['basket/orders']
        let price = 0
        let amount = 0

        orders.forEach((order) => {
          amount += order.amount
          price += order.amount * order.price
        })

        return { price, amount }
      }
    },
    methods: {
      decrease: function (order) {
        store.commit('basket/decrease', order.code)
      },
      increase: function (order) {
        store.commit('basket/increase', order.code)
      },
      showSubmenu: function () {
        let self = this
        if(self.total.amount === 0) {
          return
        }
        $('.basket-detail').slideToggle('fast')
      },
      showCustomerModal: function () {
        $('#customer-modal').modal('show')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section {
    position: relative;

    .your-basket {
      cursor: pointer;

      .media {
        padding: 1.5rem 1.125rem;

        @media screen and (max-width: 600px) {
          text-align: center;
        }

        .icon {
          align-self: center;
          margin-right: 1rem;
        }
        .title {
          color: #605a54;
          font-size: 0.875rem;
          font-weight: 700;
        }
        .number {
          color: #646464;
          font-size: 0.875rem;
        }
      }
    }

    .basket-detail {
      display: none;
      position: absolute;
      top: 100%;
      right: 0;
      width: 23.25rem;
      background-color: #faf0e6;
      border-radius: 1rem;
      box-shadow: 0px 0.5rem 1rem 1rem rgba(0, 0, 0, 0.2);
      padding: 1rem;
      z-index: 1040;

      .total {
        padding-top: 0.875rem;

        .col {
          align-self: center;
        }
        .text {
          color: rgba(#000000, 0.75);
          font-size: 1rem;
          font-weight: 500;
        }
        .price {
          color: rgba(#000000, 0.75);
          font-size: 1.25rem;
          font-weight: 700;
        }

        button {
          font-size: 1rem;
          font-weight: 700;
          border-radius: 1.875rem;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }
      }
    }
  }

  .order {
    border-bottom: 0.0625rem solid rgba(#000000, 0.1);
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;

    .title {
      font-size: 1.125rem;
      font-family: 'Bloom';
      font-weight: 700;
      font-style: italic;
      line-height: 1.2;
      margin-bottom: 0.25rem;
    }

    .price {
      font-size: 1rem;
      font-weight: 500;
    }

    .spinner {
      color: rgba(#000000, 0.5);
      background-color: #ede4da;
      font-weight: 500;
      border-radius: 1.75rem;
      padding: 0.3125rem 0.625rem;
      margin-top: 0.125rem;

      .amount {
        display: inline-block;
        width: 1.25rem;
        font-size: 1rem;
        text-align: center;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
      .button {
        font-size: 1.25rem;
        cursor: pointer;
      }
    }
  }
</style>
