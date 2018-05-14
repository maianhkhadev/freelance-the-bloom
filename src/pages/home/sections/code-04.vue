<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <img class="deco-01" src="~@/assets/images/pages/home/sections/code-04/deco-01.png" alt="">
        <div class="col-xl-6 mx-auto text-center">
          <div class="title">Giỏ Quà Như Ý</div>
          <div class="subtitle">Tạo giỏ quà Tết theo cách của bạn. Trao gửi những lời yêu thương đến những người thân của mình</div>

          <div class="row tabs">
            <div class="col">
              <div class="tab-link active" v-on:click="showTab('cate-03', $event)">Lai rai ngày Tết</div>
            </div>
            <div class="col">
              <div class="tab-link" v-on:click="showTab('cate-02', $event)">Vui khỏe ngày Xuân</div>
            </div>
            <div class="col">
              <div class="tab-link" v-on:click="showTab('cate-01', $event)">Thức uống ngày Tết</div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div id="cate-03" class="tab-content active">
            <products collection="003"></products>
          </div>
          <div id="cate-02" class="tab-content">
            <products collection="002"></products>
          </div>
          <div id="cate-01" class="tab-content">
            <products collection="001"></products>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Products from './products/index'

  export default {
    components: {
      'products': Products
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
  .section {
    position: relative;

    .deco-01 {
      position: absolute;
      top: 3rem;
      left: 0;

      @media screen and (max-width: 600px) {
        top: 1.5rem;
        width: 50%;
      }
    }
  }
  .section .container {
    border-top: 0.125rem solid #e4dbcf;
    padding-top: 5rem;
    padding-bottom: 5rem;

    @media screen and (max-width: 600px) {
      padding-top: 9rem;
    }

    .title {
      color: #7d644b;
      font-size: 3.75rem;
      font-family: 'Bloom';
      font-weight: 700;
      font-style: italic;
      margin-bottom: 1.25rem;
    }
    .subtitle {
      color: #87827c;
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .tabs {
      margin-top: 2.875rem;
      margin-bottom: 5.125rem;

      .col {
        padding-left: 10px;
        padding-right: 10px;
      }
    }

    .tab-link {
      color: #7d644b;
      background-color: transparent;
      font-size: 1rem;
      font-weight: 700;
      text-align: center;
      border-bottom: 0.125rem solid #e4dbcf;
      padding-top: 1rem;
      padding-bottom: 1rem;
      transition: 0.3s;
      cursor: pointer;

      @media screen and (max-width: 600px) {
        height: 4rem;
      }

      &:hover {
        border-bottom: 0.125rem solid #7d644b;
      }

      &.active {
        border-bottom: 0.125rem solid #7d644b;
      }
    }

    .tab-content {
      display: none;

      &.active {
        display: block;
        animation: fadeIn 1s;
      }
    }

    @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
    }
  }
</style>
