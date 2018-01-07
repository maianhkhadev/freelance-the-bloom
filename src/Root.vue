<template>
  <div id="root">
    <header>
      <div class="container">
        <div class="row">
          <div class="col-xl-2">
            <img class="imf-fluid" src="~@/assets/images/root/header/logo.png" alt="">
          </div>
          <div class="col-xl-8">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Gift Sets</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Retail Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Reason to Belive</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div class="col-xl-2">
            <your-basket></your-basket>
          </div>
        </div>
      </div>
    </header>

    <main role="main">
      <router-view></router-view>
    </main>

    <footer>
      <img class="img-fluid" src="~@/assets/images/root/footer/wave.png" alt="">
      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col-xl-6">
              <div class="title">About Us</div>
              <div class="content">
                <p>Anywhere in Vietnam, from low lands rich in alluvium to plateaus of red soil, to forests shouldering limestone mountains, the flora offers precious specialties blooming from the land. They are gifts from the earth for those who can appreciate such natural delicacies.</p>
                <p>We are a row of Vietnamese agriculture products. Our story traces back to natural cultivation from the old days, when our forefathers lived happily on the land without chemicals or machineries.</p>
                <p>The Bloom would like to convey to you this love from the earth…</p>
              </div>
              <a href="#">
                <img class="img-fluid" src="~@/assets/images/root/footer/visit-us.png" alt="">
              </a>
            </div>
            <div class="col-xl-6">
              <div class="title">Where To Buy?</div>
              <div class="row">
                <div class="col-xl-6">
                  <div class="address">
                    The Bloom Store / Thao Dien
                    <small>32 D10, Thao Dien, D2, HCMC</small>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="address">
                    The Bloom Store / Thao Dien
                    <small>32 D10, Thao Dien, D2, HCMC</small>
                  </div>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-xl-8">
                  <div class="address">
                    Authentique Home
                    <small>113 Le Thanh Ton, Ben Nghe, D1, HCMC</small>
                    <small>71 Mac Thi Buoi, Ben Nghe, D1, HCMC</small>
                  </div>
                </div>
              </div>
              <hr>
              <div class="title mb-2">Hỏi thêm về quà Tết?</div>
              <div class="content">
                Call us <a href="tel:02838221682">(028) 3822 1682</a> or <a href="#">click here</a> in order to know more.
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="row">
            <div class="col-xl-2 col-6 align-self-center">
              <div class="title mb-0">Our Partners</div>
            </div>
            <div class="col-2">
              <img class="img-fluid" src="~@/assets/images/root/footer/brands/im-01.png" alt="">
            </div>
            <div class="col-2">
              <img class="img-fluid" src="~@/assets/images/root/footer/brands/im-01.png" alt="">
            </div>
            <div class="col-2">
              <img class="img-fluid" src="~@/assets/images/root/footer/brands/im-01.png" alt="">
            </div>
            <div class="col-2">
              <img class="img-fluid" src="~@/assets/images/root/footer/brands/im-01.png" alt="">
            </div>
            <div class="col-2">
              <img class="img-fluid" src="~@/assets/images/root/footer/brands/im-01.png" alt="">
            </div>
          </div>
        </div>
        <div class="section">
          <div class="row">
            <div class="col-6 align-self-center">
              <div class="text">Discount & Purchasing Policies</div>
            </div>
            <div class="col-6">
              <div class="socials">
                <a href="#">
                  <img class="img-fluid" src="~@/assets/images/root/footer/facebook.png" alt="">
                  Facebook
                </a>
                <a href="#">
                  <img class="img-fluid" src="~@/assets/images/root/footer/mail.png" alt="">
                  hello@thebloom.vn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import YourBasket from '@/components/your-basket'

  export default {
    components: {
      'your-basket': YourBasket
    }
  }
</script>

<style lang="scss" src="./assets/scss/root.scss"></style>

<style lang="scss" scoped>
  header {
    // position: sticky;
    // top: 0;
    // padding-top: 0.5rem;
    // padding-bottom: 0.5rem;
    // z-index: 1070;
//
    .nav {
      justify-content: flex-end;

      .nav-item {

        .nav-link {
          color: #605a54;
          font-size: 1.125rem;
          font-weight: 700;
          letter-spacing: 0.0625rem;
          padding: 2.125rem 1.125rem;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  footer {
    background-color: #f1e4d5;

    .section {
      border-top: 0.125rem solid #e4dbcf;
      padding-top: 2rem;
      padding-bottom: 2rem;

      &:first-child {
        border-top: unset;
      }

      hr {
        margin-top: 1.563rem;
        margin-bottom: 1.563rem;
      }

      .title {
        color: #7d644b;
        font-size: 1.25rem;
        font-family: 'Bloom';
        font-weight: 700;
        margin-bottom: 1.25rem;
      }

      .content {
        color: #87827c;
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1.75rem;

        a {
          color: #87827c;
          font-weight: 700;
          text-decoration: underline;
        }
      }

      .address {
        color: #605a54;
        font-size: 1rem;
        font-weight: 700;

        small {
          display: block;
          color: #646464;
          font-size: 0.75rem;
        }
      }
    }

    .section {

      .text {
        color: #605a54;
        font-size: 1rem;
        font-weight: 700;
        text-decoration: underline;
      }

      .socials {
        text-align: right;

        a {
          color: #605a54;
          font-size: 1rem;
          font-weight: 700;
          margin-left: 1rem;

          &:hover {
            text-decoration: unset;
          }
        }
      }
    }
  }
</style>
