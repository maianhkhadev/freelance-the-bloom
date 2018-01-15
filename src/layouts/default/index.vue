<template>
  <div id="root">
    <vue-header></vue-header>

    <main role="main">
      <home></home>
    </main>

    <vue-footer></vue-footer>

    <done-modal></done-modal>

    <fill-contact-modal></fill-contact-modal>

    <div class="messenger-box">
      <div class="fb-page" data-href="https://www.facebook.com/thebloom.vietnam/" data-tabs="messages" data-height="380" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
        <blockquote cite="https://www.facebook.com/thebloom.vietnam/" class="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/thebloom.vietnam/">The Bloom  - The gift from Vietnam nature</a>
        </blockquote>
      </div>
    </div>
    <a class="messenger" href="#" v-on:click.prevent="showChat">
      <img class="img-fluid" src="~@/assets/images/layouts/default/messenger.png" alt="">
    </a>

    <a class="btt" href="#" v-on:click.prevent="scrollTo">
      <img class="img-fluid" src="~@/assets/images/layouts/default/btt.png" alt="">
    </a>

    <div class="phone">
      <img class="img-fluid" src="~@/assets/images/layouts/default/viber.png" alt="">
      <a  href="tel:0938878006"> (093) 887 8006 </a>
    </div>
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
    .btt {
      position: fixed;
      bottom: calc(15% - 5rem);
      right: 0.5rem;
      width: 4.5rem;
      z-index: 1030;
      opacity: 0.75;
    }
    .phone {
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
  }
</style>
