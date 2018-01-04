<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-6">

      </div>
      <div class="col-xl-6">

      </div>
    </div>
    <div class="row">
      <div class="col-xl-6">

      </div>
      <div class="col-xl-6">

      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <combos></combos>
      </div>
    </div>
    <div class="section-products">
      <div class="row">
        <img class="img-fluid deco-01" src="~@/assets/images/pages/home/sections/products/deco-01.png" alt="">
        <div class="col-xl-6 mx-auto text-center">
          <div class="title">Our Retailed Products</div>
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <div class="row tabs">
            <div class="col">
              <div class="tab-link active" v-on:click="showTab('cate-01', $event)">Rượu</div>
            </div>
            <div class="col">
              <div class="tab-link" v-on:click="showTab('cate-02', $event)">Chăm sóc sức khỏe</div>
            </div>
            <div class="col">
              <div class="tab-link" v-on:click="showTab('cate-03', $event)">Trà • Café</div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div id="cate-01" class="tab-content active">
            <products></products>
          </div>
          <div id="cate-02" class="tab-content">
            <products></products>
          </div>
          <div id="cate-03" class="tab-content">
            <products></products>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">

      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">

      </div>
    </div>
    <div class="row">
      <div class="col-xl-6">
        <div class="">About Us</div>
      </div>
      <div class="col-xl-6">
        <contact-us></contact-us>
      </div>
    </div>
  </div>
</template>

<script>
  import Combos from './sections/combos/index'
  import Products from './sections/products/index'
  import ContactUs from './sections/contact-us'

  export default {
    components: {
      'combos': Combos,
      'products': Products,
      'contact-us': ContactUs
    },
    methods: {
      showTab: function (tabName, event) {
        let tabContents = document.querySelectorAll('.tab-content')
        tabContents.forEach((tabContent) => {
          tabContent.className = tabContent.className.replace(' active', '')
        })
        let tabLinks = document.querySelectorAll('.tab-link')
        tabLinks.forEach((tabLink) => {
          tabLink.className = tabLink.className.replace(' active', '')
        })
        document.getElementById(tabName).className += ' active'
        event.currentTarget.className += ' active'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-products {
    position: relative;
    padding-top: 2.5rem;
    padding-bottom: 5rem;

    .deco-01 {
      position: absolute;
      top: 0;
      left: 0;
    }

    .title {
      color: #dc4551;
      font-size: 1.875rem;
      font-family: 'Bloom';
      font-weight: 700;
      font-style: italic;
      margin-bottom: 1.25rem;
    }
    .content {
      font-size: 1rem;
      font-weight: 500;
    }

    .tabs {
      margin-top: 2.875rem;
      margin-bottom: 5.125rem;
    }

    .tab-link {
      color: #7d644b;
      background-color: transparent;
      font-size: 0.875rem;
      font-weight: 700;
      text-align: center;
      border-bottom: 0.125rem solid #e4dbcf;
      padding-top: 1rem;
      padding-bottom: 1rem;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        border-bottom: 0.125rem solid #a18d7a;
      }

      &.active {
        border-bottom: 0.125rem solid #a18d7a;
      }
    }

    .tab-content {
      display: none;

      &.active {
        display: block;
        animation: fadeIn 0.35s;
      }
    }

    @keyframes fadeIn {
        from {
          opacity: 0.5;
        }
        to {
          opacity: 1;
        }
    }
  }
</style>
