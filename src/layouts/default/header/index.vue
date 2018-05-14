<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-xl-2 col-3">
          <a href="#" v-on:click.prevent="scrollTo('body')">
            <img class="img-fluid" src="~@/assets/images/layouts/default/header/logo.png" alt="The Bloom">
          </a>
        </div>
        <div class="col-3 align-self-center d-block d-sm-none">
          <div class="nav-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="col-10">
          <ul class="nav">
            <li class="nav-item">
              <a id="nav-section-03" class="nav-link" href="#" v-on:click.prevent="scrollTo('#section-03')">Giỏ quà Tết</a>
            </li>
            <li class="nav-item">
              <a id="nav-section-04" class="nav-link" href="#" v-on:click.prevent="scrollTo('#section-04')">Sản phẩm Tết</a>
            </li>
            <li class="nav-item">
              <a id="nav-section-05" class="nav-link" href="#" v-on:click.prevent="scrollTo('#section-05')">Tiêu chí</a>
            </li>
            <li class="nav-item">
              <a id="nav-section-contact" class="nav-link" href="#" v-on:click.prevent="scrollTo('#section-contact')">Liên lạc</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/static/TheBloom.pdf" download>Tải bảng giá</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    methods: {
      scrollTo: function (domId) {
        $('html,body').animate({
          scrollTop: $(domId).offset().top - 95
        }, 600)
      }
    },
    mounted () {
      $('.nav-icon').click(function () {
        $(this).toggleClass('shown')
        $('.nav').slideToggle('fast')
      })

      $(window).scroll(function () {
        let screenTop = $(window).scrollTop()
        let screenBottom = screenTop + $(window).height()

        if (screenTop > 0) {
          $('header').addClass('sticky')
        } else{
          $('header').removeClass('sticky')
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .sticky {
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #faf0e6;
    box-shadow: 0 0.125rem 0.75rem #e8dfd6;
    transition: all 0.35s;
    z-index: 1000;

    img {
      box-shadow: unset;
    }
  }

  header {

    img {
      border-radius: 0 0 1.25rem 1.25rem;
      box-shadow: 0px 0.5rem 1rem 0px rgba(0, 0, 0, 0.2);
      transition: all 0.35s;
    }

    .nav-icon {
      float: right;
      display: none;

      @media only screen and (max-width: 600px) {
        display: block;
      }
    }

    .nav {
      justify-content: flex-end;

      @media only screen and (max-width: 1200px) {
        justify-content: flex-start;
        margin-top: 1.25rem;
      }
      @media only screen and (max-width: 600px) {
        display: none;
        flex-direction: column;
      }

      .nav-item {

        .nav-link {
          color: #605a54;
          font-size: 1.125rem;
          font-weight: 700;
          letter-spacing: 0.0625rem;
          padding: 2.25rem;

          &.active {
            color: #dc4551;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .nav-icon {
    width: 2.5rem;
    height: 1.875rem;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
  }

  .nav-icon span {
    display: block;
    position: absolute;
    height: 0.25rem;
    width: 100%;
    background: #7d644b;
    border-radius: 0.5625rem;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }

  .nav-icon span:nth-child(1) {
    top: 0;
  }

  .nav-icon span:nth-child(2),.nav-icon span:nth-child(3) {
    top: 0.75rem;
  }

  .nav-icon span:nth-child(4) {
    top: 1.5rem;
  }

  .nav-icon.shown span:nth-child(1) {
    top: 0.75rem;
    width: 0%;
    left: 50%;
  }

  .nav-icon.shown span:nth-child(2) {
    transform: rotate(45deg);
  }

  .nav-icon.shown span:nth-child(3) {
    transform: rotate(-45deg);
  }

  .nav-icon.shown span:nth-child(4) {
    top: 0.85rem;
    width: 0%;
    left: 50%;
  }
</style>
