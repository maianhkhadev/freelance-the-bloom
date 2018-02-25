<template>
  <div :id="`product-detail-${data.code}`" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="product">
            <div class="row">
              <div class="col-5 mx-auto">
                <img class="img-fluid" :src="data.thumbnail.src" :alt="data.thumbnail.alt">
              </div>
              <div class="col-xl-7">
                <div class="title">{{ data.name }}</div>
                <div class="price">{{ data.price | currency }}<sup>đ</sup></div>
                <div class="content">{{ data.content }}</div>

                <button-bloom class="mt-3" data-dismiss="modal">Đóng</button-bloom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        default: function () {
          return { }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {

    .modal-content {
      background-color: #faf0e6;
      border-radius: 1.25rem;

      .modal-body {
        padding: 1.5rem;
      }
    }

    .product {

      @media screen and (max-width: 600px) {
        text-align: center;

        img {
          margin-bottom: 1.25rem;
        }
      }

      .title {
        color: rgba(#000000, 0.75);
        font-size: 1.875rem;
        font-family: 'Bloom';
        font-weight: 700;
        font-style: italic;
        line-height: 1.2;
      }
      .price {
        color: rgba(#000000, 0.60);
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 1.25rem;
      }
      .content {
        color: rgba(#000000, 0.75);
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
</style>
