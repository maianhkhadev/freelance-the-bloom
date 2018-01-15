<template>
  <div :id="`combo-detail-${data.code}`" ref="modal" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">X</button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-xl-12 text-center">
              <div class="combo-name">{{ data.name }}</div>
              <div class="combo-content">{{ data.content }}</div>
            </div>
          </div>
          <slick ref="slick01" :id="`slider-for-${data.code}`" :options="slick01.options">
            <template v-for="product in products">
              <div>
                <div class="product">
                  <div class="row">
                    <div class="col-5 mx-auto">
                      <img class="img-fluid" :src="product.thumbnail.src" :alt="product.thumbnail.alt">
                    </div>
                    <div class="col-xl-7 align-self-center">
                      <div class="title">{{ product.name }}</div>
                      <div class="price">{{ product.price | currency }}<sup>đ</sup></div>
                      <div class="content">{{ product.content }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </slick>
          <hr>
          <div class="row">
            <div class="col-2 align-self-center text-center">
              <a class="arrow" v-on:click="slickPrev">
                <img class="img-fluid" src="~@/assets/images/pages/home/sections/code-03/arrow-left.png" alt="">
              </a>
            </div>
            <div class="col-8 mx-auto">
              <slick ref="slick02" :id="`slider-nav-${data.code}`" :options="slick02.options">
                <template v-for="product in products">
                  <div>
                    <div style="padding: 0.5rem;">
                      <img class="img-fluid" :src="product.thumbnail.src" :alt="product.thumbnail.alt">
                    </div>
                  </div>
                </template>
              </slick>
            </div>
            <div class="col-2 align-self-center text-center">
              <a class="arrow" v-on:click="slickNext">
                <img class="img-fluid" src="~@/assets/images/pages/home/sections/code-03/arrow-right.png" alt="">
              </a>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-xl-6">
              <div class="label-combo-price">Giá bán</div>
              <div class="combo-price">{{ data.price | currency }}<sup>đ</sup></div>
            </div>
            <div class="col-xl-6 align-self-center text-right">
              <button-add-one v-on:click.native="add">Thêm vào giỏ</button-add-one>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store/index'
  import Slick from '@/libraries/slick'

  export default {
    data () {
      return {
        slick01: {
          options: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        slick02: {
          options: {
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3
                }
              }
            ]
          }
        }
      }
    },
    props: {
      data: {
        default: function () {
          return { }
        }
      }
    },
    computed: {
      products: function () {
        let self = this
        let products = store.getters['products/all']

        return products.filter(product => {
          let code = self.data.productCodes.find(code => product.code === code)
          return code !== undefined
        })
      }
    },
    components: {
      'slick': Slick
    },
    methods: {
      add: function () {
        let self = this
        store.commit('basket/add', self.data)
      },
      slickPrev: function() {
        let self = this
        self.$refs.slick02.slickPrev()
      },
      slickNext: function() {
        let self = this
        self.$refs.slick02.slickNext()
      }
    },
    mounted () {
      let self = this

      self.slick01.options.asNavFor =`#slider-nav-${self.data.code}`
      self.slick02.options.asNavFor =`#slider-for-${self.data.code}`

      $(self.$refs.modal).on('shown.bs.modal', function (e) {
        self.$refs.slick01.slick()
        self.$refs.slick02.slick()
      })

      $(self.$refs.modal).on('hidden.bs.modal', function (e) {
        self.$refs.slick01.unslick()
        self.$refs.slick02.unslick()
      })
    }
  }
</script>

<style lang="scss" scoped>
  .modal {

    .close {
      color: #b2aba4;
      background-color: #e1d8cf;
      border: unset;
      border-radius: 50%;
      padding: 0.5rem 0.875rem;
      margin: 0 0 0 auto;

      &:focus {
        outline: unset;
      }
    }

    .modal-content {
      background-color: #faf0e6;
      border-radius: 1.25rem;

      .modal-header {
        border-bottom: unset;
        padding: 1.25rem;
        padding-bottom: unset;
        margin-bottom: -3.25rem;
        z-index: 900;
      }
      .modal-body {
        padding: 1.25rem;
        padding-top: unset;
      }
    }

    .combo-name {
      color: #7d644b;
      font-size: 2.5rem;
      font-family: 'Bloom';
      font-style: italic;

      span {
        font-size: 4.5rem;
        font-family: 'Dance';
        font-style: normal;
        margin-left: 0.25rem;
      }
    }
    .combo-content {
      color: rgba(#000000, 0.75);
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 2.75rem;
    }

    hr {
      margin-top: 2.75rem;
      margin-bottom: 1.75rem;
    }

    .product {

      @media screen and (max-width: 600px) {
        text-align: center;

        img {
          margin-bottom: 1.25rem;
        }
      }

      .title {
        color: rgba(#000000, 0.75);
        font-size: 1.875rem;
        font-family: 'Bloom';
        font-weight: 700;
        font-style: italic;
        line-height: 1.2;
      }
      .price {
        color: rgba(#000000, 0.60);
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 1.25rem;
      }
      .content {
        color: rgba(#000000, 0.75);
        font-size: 1rem;
        font-weight: 500;
      }
    }

    .arrow {
      opacity: 0.25;

      &:hover, &:focus {
        opacity: 0.75;
      }
    }

    .label-combo-price {
      color: #7d644b;
      font-size: 1.125rem;
    }
    .combo-price {
      color: #7d644b;
      font-size: 2.125rem;
      font-weight: 700;
      line-height: 1.2;
    }
  }
</style>
