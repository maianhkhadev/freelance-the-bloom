<template>
  <div id="root">
    <vue-header></vue-header>

    <main role="main">
      <home></home>
    </main>

    <vue-footer></vue-footer>

    <done-modal></done-modal>

    <fill-contact-modal></fill-contact-modal>

    <div class="phone-in-mobile pulse d-block d-xl-none">
      <a href="tel:0938878006">
        <img class="img-fluid" src="~@/assets/images/layouts/default/viber.png" alt="">
      </a>
    </div>
    <div class="phone-in-desktop pulse d-none d-xl-block">
      <img class="img-fluid" src="~@/assets/images/layouts/default/viber.png" alt="">
      <a href="tel:0938878006"> (093) 887 8006 </a>
    </div>

    <div class="messenger-box">
      <div class="fb-page" data-href="https://www.facebook.com/thebloom.vietnam/" data-tabs="messages" data-height="380" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
        <blockquote cite="https://www.facebook.com/thebloom.vietnam/" class="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/thebloom.vietnam/">The Bloom  - The gift from Vietnam nature</a>
        </blockquote>
      </div>
    </div>
    <a class="messenger pulse" href="#" v-on:click.prevent="showChat">
      <img class="img-fluid" src="~@/assets/images/layouts/default/messenger.png" alt="">
    </a>

    <a class="back-to-top" href="#" v-on:click.prevent="scrollTo">
      <img class="img-fluid" src="~@/assets/images/layouts/default/btt.png" alt="">
    </a>

  </div>
</template>

<script>
  import Header from './header/index'
  import Home from '@/pages/home/index'
  import Footer from './footer/index'
  import DoneModal from '@/components/done-modal'
  import FillContactModal from '@/components/fill-contact-modal'

  export default {
    components: {
      'vue-header': Header,
      'home': Home,
      'vue-footer': Footer,
      'done-modal': DoneModal,
      'fill-contact-modal': FillContactModal
    },
    methods: {
      showChat: function () {
        $('.messenger-box').toggle()

        // ADD GTM
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          'Homepage+button': 'Homepage+button+click+messenger'
        })
      },
      scrollTo: function () {
        $('html,body').animate({
          scrollTop: 0
        }, 600)
      }
    },
    mounted () {
      setTimeout(function () {
        $('.messenger-box').hide()
      }, 2000)
    }
  }
</script>

<style lang="scss" src="@/assets/scss/root.scss"></style>

<style lang="scss" scoped>
  #root {
    position: relative;

    .messenger-box {
      position: fixed;
      bottom: calc(15% + 5rem);
      right: 1rem;
      min-width: 180px;
      width: 340px;
      z-index: 1031;
    }
    .messenger {
      position: fixed;
      bottom: 15%;
      right: 1rem;
      width: 4.5rem;
      z-index: 1030;
    }
    .back-to-top {
      position: fixed;
      bottom: calc(15% - 5.25rem);
      right: 1.5rem;
      width: 3.5rem;
      z-index: 1030;
      opacity: 0.75;
    }
    .phone-in-desktop {
      position: fixed;
      bottom: calc(15% + 5.75rem);
      right: 1rem;
      width: 4.5rem;
      height: 4.5rem;
      z-index: 1030;
      overflow: hidden;
      transition: all 0.35s;

      &:hover {
        width: 15.75rem;
        background-color: #ffffff;
        border-radius: 2rem;

        &.shake {
          animation-name: unset;
        }

        a {
          display: inline-block;
        }
      }

      img {
        width: 4.5rem;
      }
      a {
        display: none;
        color: #7d644b;
        font-size: 1.25rem;
        padding-left: 0.75rem;
        padding-right: 1.25rem;
      }
    }
    .phone-in-mobile {
      position: fixed;
      bottom: calc(15% + 5.75rem);
      right: 1rem;
      width: 4.5rem;
      height: 4.5rem;
      z-index: 1030;
    }
  }

  @keyframes pulse {
    0% {
      transform: scaleX(1);
    }
    50% {
      transform: scale3d(1.05,1.05,1.05);
    }
    to {
      transform: scaleX(1);
    }
  }
  .pulse{
    animation-name: pulse;
    animation-iteration-count: infinite;
    animation-duration: 1.5s;
    animation-fill-mode: both;
  }
</style>
