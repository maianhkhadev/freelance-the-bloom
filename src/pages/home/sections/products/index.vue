<template>
  <div class="products">
    <div class="row">
      <template v-for="product in products">
        <div class="col-xl-3 col-6">
          <product :data="product"></product>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import store from '@/store/index'
  import Product from './product'

  export default {
    props: {
      collection: {
        default: function () {
          return ''
        }
      }
    },
    computed: {
      products: function () {
        let self = this
        let products = store.getters['products/all']

        return products.filter(product => product.collection === self.collection)
      }
    },
    components: {
      'product': Product
    }
  }
</script>

<style lang="scss" scoped>
  .products {

    .col-xl-3 {
      margin-bottom: 2.75rem;
    }

    .line {
      background-color: #e4dbcf;
      height: 0.125rem;
      margin-top: 0.625rem;
      margin-bottom: 3.125rem;
    }
  }
</style>
