<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 align-self-end">
          <div class="title">MANG TẾT VỀ NHÀ VỚI NHỮNG SẢN VẬT SẠCH-LÀNH.</div>
          <div class="content">
            <p>Quà tết độc đáo và tốt cho sức khỏe.  Nguyên liệu chọn lọc, sạch và lành từ Đất Mẹ. Nhiều lựa chọn quà tặng cho bạn và cho người thân thương.</p>
          </div>
          <div class="row mb-3">
            <div class="col-6">
              <div class="media">
                <img src="~@/assets/images/pages/home/sections/code-01/icon-01.png" alt="">
                <div class="media-content">
                  Sản phẩm thuần tự nhiên
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="media">
                <img src="~@/assets/images/pages/home/sections/code-01/icon-02.png" alt="">
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
                <img src="~@/assets/images/pages/home/sections/code-01/icon-03.png" alt="">
                <div class="media-content">
                  Sản phẩm không sử dụng hóa chất
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="media">
                <img src="~@/assets/images/pages/home/sections/code-01/icon-04.png" alt="">
                <div class="media-content">
                  Không chất phụ gia và chất bảo quản
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <img class="img-fluid mt-3 mt-xl-0" src="~@/assets/images/pages/home/sections/code-01/im-01.png" alt="">
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
      padding-top: 5rem;
    }

    .title {
      color: #7d644b;
      font-size: 2.25rem;
      font-family: 'Bloom';
      font-weight: 700;
      font-style: italic;
      line-height: 1.2;
      margin-bottom: 1.125rem;

      @media screen and (max-width: 600px) {
        font-size: 3.125rem;
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
      bottom: 4rem;
      left: 50%;
      z-index: -1;

      @media screen and (max-width: 600px) {
        left: 0;
      }
    }
  }
</style>
