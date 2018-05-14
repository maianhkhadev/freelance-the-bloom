<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 order-xl-2">
          <div class="title">Thông điệp mùa Xuân</div>
          <div class="content">
            <p>Trao yêu thương và thi vị đến người <span class="d-inline-block">thân thương</span> với Quà Tết <span class="d-inline-block">The Bloom</span>.</p>
            <p>Dù cho bao thay đổi, ý nghĩa chân phương của quà Tết sẽ luôn là lời thăm hỏi chân tình với người thân quý khi năm hết Tết đến.</p>
            <p>Không dừng lại ở một món quà tặng tốt cho sức khoẻ từ sản vật <span class="d-inline-block">thiên nhiên</span> Việt Nam, sản phẩm quà Tết <span class="d-inline-block">The Bloom</span> còn là sự tri ân dành cho người thân, bạn hữu và đối tác.</p>
            <p><span class="d-inline-block">The Bloom</span> yêu cái đẹp, cái duyên, nên chăm chút từng bao bì, từng chi tiết nhỏ: Chiếc làn tre đựng quà được làm thủ công từ những làng nghề đan lát lâu năm, hoạ tiết in trên hộp quà được sáng tạo từ các chất liệu dân gian truyền thống, tất cả tâm huyết của <span class="d-inline-block">The Bloom</span> làm cho món quà trở thành một niềm vui ngày Xuân thi vị.</p>
            <p>Tết này, ngoài các sản phẩm đã quen thuộc với khách hàng: rượu <span class="d-inline-block">trái cây</span> lên men, trà sạch, các loại mứt ít đường, tinh dầu..., <span class="d-inline-block">The Bloom</span> có thêm nhiều món ngon từ những nguyên liệu chọn lọc nhất, tươi ngon nhất, nên bạn cứ yên tâm món quà <span class="d-inline-block">The Bloom</span> sẽ là quà tặng sức khỏe ý nghĩa mà an tâm đến người <span class="d-inline-block">thân thương</span>.</p>
          </div>
        </div>
        <div class="col-xl-6 order-xl-1 align-self-center">
          <img class="img-fluid" src="~@/assets/images/pages/home/sections/code-02/im-01.png" alt="">
        </div>
      </div>
    </div>
    <img class="deco-01" src="~@/assets/images/pages/home/sections/code-02/deco-01.png" alt="">
  </div>
</template>

<style lang="scss" scoped>
  .section {
    position: relative;
    padding-top: 11.75rem;

    @media screen and (max-width: 600px) {
      padding-bottom: 5rem;
    }

    img {

      @media screen and (max-width: 600px) {
        margin-bottom: 1.25rem;
      }
    }

    .title {
      color: #7d644b;
      font-size: 1.25rem;
      font-family: 'Bloom';
      font-weight: 700;
      margin-bottom: 1.25rem;
    }
    .content {
      color: rgba(#000000, 0.6);
      font-size: 1rem;
      font-weight: 500;
    }
    .deco-01 {
      position: absolute;
      top: 0;
      left: 38%;
      z-index: -1;

      @media screen and (max-width: 600px) {
        top: 2.5%;
        left: 26%;
        width: 50%;
      }
    }
  }
</style>
