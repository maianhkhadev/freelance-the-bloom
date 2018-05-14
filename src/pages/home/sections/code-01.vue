<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <div class="title">Mang Tết về nhà với những sản vật sạch - lành từ Đất Mẹ</div>
          <div class="content">
            <p>Quà Tết độc đáo và tốt cho sức khỏe. Nguyên liệu được trồng sach / an toàn / theo hướng hữu cơ. Sản phẩm thuần tự nhiên, không sử dụng hương liệu, không dùng chất phụ gia và không chất bảo quản.</p>
          </div>
          <div class="row mb-3">
            <div class="col-6">
              <div class="media">
                <img src="~@/assets/images/pages/home/sections/code-01/icon-01.svg" alt="">
                <div class="media-content">
                  Sản phẩm thuần <span class="d-inline-block">tự nhiên</span>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="media">
                <img src="~@/assets/images/pages/home/sections/code-01/icon-03.png" alt="">
                <div class="media-content">
                  Nguyên liệu được trồng sạch
                </div>
              </div>
            </div>
            <div class="col-xl-12">
              <hr>
            </div>
            <div class="col-6">
              <div class="media">
                <img src="~@/assets/images/pages/home/sections/code-01/icon-02.png" alt="">
                <div class="media-content">
                  Sản phẩm không <span class="d-inline-block">sử dụng</span> hóa chất
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="media">
                <img src="~@/assets/images/pages/home/sections/code-01/icon-04.svg" alt="">
                <div class="media-content">
                  Không chất phụ gia và chất bảo quản
                </div>
              </div>
            </div>
          </div>
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

    @media screen and (max-width: 600px) {
      padding-top: 8rem;
      padding-bottom: calc(3rem + 50vw);
    }

    .title {
      color: #7d644b;
      font-size: 2.25rem;
      font-family: 'Bloom';
      font-weight: 700;
      font-style: italic;
      line-height: 1.2;
      margin-top: 15rem;
      margin-bottom: 1.125rem;

      @media screen and (max-width: 600px) {
        margin-top: 0;
      }
    }
    .content {
      color: rgba(#000000, 0.6);
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 2.5rem;
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

      @media screen and (max-width: 600px) {
        width: 50%;
      }
    }
    .deco-02 {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: -1;

      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
  }
</style>
