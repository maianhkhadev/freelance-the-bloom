<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 align-self-end">
          <div class="title">Celebrate your own Tet with our collective gifts.</div>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div class="row mb-3">
            <div class="col-xl-6">
              <div class="media">
                <img src="~@/assets/images/pages/home/sections/code-01/icon-01.png" alt="">
                <div class="media-content">
                  Lorem ipsum dolor sit amet consectetur
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="media">
                <img src="~@/assets/images/pages/home/sections/code-01/icon-02.png" alt="">
                <div class="media-content">
                  Lorem ipsum dolor sit amet consectetur
                </div>
              </div>
            </div>
            <div class="col-xl-12">
              <hr>
            </div>
            <div class="col-xl-6">
              <div class="media">
                <img src="~@/assets/images/pages/home/sections/code-01/icon-03.png" alt="">
                <div class="media-content">
                  Lorem ipsum dolor sit amet consectetur
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="media">
                <img src="~@/assets/images/pages/home/sections/code-01/icon-04.png" alt="">
                <div class="media-content">
                  Lorem ipsum dolor sit amet consectetur
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <img class="img-fluid" src="~@/assets/images/pages/home/sections/code-01/im-01.png" alt="">
        </div>
      </div>
    </div>
    <img class="deco-01" src="~@/assets/images/pages/home/sections/code-01/deco-01.png" alt="">
    <img class="deco-02" src="~@/assets/images/pages/home/sections/code-01/deco-02.png" alt="">
  </div>
</template>

<style lang="scss" scoped>
  .section {
    position: relative;
    padding-top: 1rem;
    padding-bottom: 3rem;

    .title {
      color: #7d644b;
      font-size: 3.75rem;
      font-family: 'Bloom';
      font-weight: 700;
      font-style: italic;
      letter-spacing: -0.125rem;
      line-height: 1;
      margin-bottom: 1.125rem;
    }
    .content {
      color: #87827c;
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 2.75rem;
    }

    hr {
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
    }

    .media {

      img {
        width: 2.75rem;
        margin-top: 0.5rem;
        margin-right: 1rem;
      }

      .media-content {
        color: #7d644b;
        font-size: 1.125rem;
        font-weight: 500;
      }
    }

    .deco-01 {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .deco-02 {
      position: absolute;
      bottom: 4rem;
      left: 50%;
      z-index: -1;
    }
  }
</style>
