<template>
  <div class="section">
    <div class="row">
      <div class="col-xl-6 align-self-center">
        <a class="text" href="/static/TheBloom.pdf" download>Tải bảng giá</a>
      </div>
      <div class="col-xl-6">
        <div class="socials">
          <a href="https://www.facebook.com/thebloom.vietnam/">
            <img class="img-fluid" src="~@/assets/images/layouts/default/footer/facebook.png" alt="">
            Facebook
          </a>
          <a href="mailto:hello@thebloom.vn">
            <img class="img-fluid" src="~@/assets/images/layouts/default/footer/mail.png" alt="">
            hello@thebloom.vn
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .section {
    border-top: 0.0625rem solid rgba(#000000, 0.1);
    padding-top: 2rem;
    padding-bottom: 2rem;

    .text {
      color: #605a54;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: underline;

      @media screen and (max-width: 600px) {
        text-align: center;
        margin-bottom: 1rem;
      }
    }

    .socials {
      text-align: right;

      @media screen and (max-width: 600px) {
        text-align: center;
      }

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
</style>
