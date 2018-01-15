<template>
  <div id="done-modal" ref="modal" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row">
            <div class="col-xl-12">
              <div class="title">Đơn hàng đã được nhận</div>
              <div class="content">Cảm ơn bạn đã gửi yêu cầu. Nhân viên của chúng tôi sẽ liên hệ với bạn sớm nhất.</div>
              <button-bloom data-dismiss="modal" aria-label="Close">Tiếp tục mua hàng</button-bloom>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .modal {

    .modal-content {
      background-color: #faf0e6;
      border-radius: 1.25rem;

      .modal-body {
        padding: 1.25rem;
      }
    }

    .title {
      color: #7d644b;
      font-size: 2.125rem;
      font-weight: 500;
      margin-bottom: 1.25rem;
    }
    .content {
      color: #7d644b;
      font-size: 1.125rem;
      font-weight: 500;
      margin-bottom: 2.25rem;
    }
  }
</style>
