<template>
  <div id="customer-modal" ref="modal" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">
            Nhập thông tin
            <small>Vui lòng để lại thông tin, The Bloom sẽ liên lạc với bạn để xác nhận đơn hàng.</small>
          </div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">X</button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-xl-12">
              <form-validation ref="validation">
                <div class="form-group">
                  <label>Tên của bạn</label>
                  <input type="text" name="name" class="form-control" v-model="customer.name">
                </div>
                <div class="form-group">
                  <label>Số điện thoại</label>
                  <input type="text" name="phone" class="form-control" v-model="customer.phone">
                </div>
                <button class="btn btn-brown mt-3" v-on:click.prevent="send">Gửi đơn hàng</button>
              </form-validation>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store/index'
  import database from '@/plugins/firebase.js'
  import FormValidation from '@/libraries/form-validation'

  export default {
    data () {
      return {
        customer: {
          name: '',
          phone: ''
        }
      }
    },
    components: {
      'form-validation': FormValidation
    },
    methods: {
      send: function() {
        let self = this
        let valid = self.$refs.validation.valid()

        if (valid) {
          let billId = database.ref().child('bills').push().key

          let updates = {};
          updates['/bills/' + billId] = {
            customer: self.customer,
            orders: store.getters['basket/orders'],
            datetime: new Date().toString()
          }

          database.ref().update(updates)

          $('.basket-detail').slideToggle('fast')
          store.commit('basket/remove')
          $('#done-modal').modal('show')
          $('#customer-modal').modal('hide')

          // ADD GTM
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            'Homepage+button': 'Homepage+button+click+Gui_thong_tin'
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {

    .close {
      color: #b2aba4;
      background-color: #e1d8cf;
      border: unset;
      border-radius: 50%;
      padding: 0.5rem 0.875rem;
      margin: 0 0 0 auto;

      &:focus {
        outline: unset;
      }
    }

    .modal-content {
      background-color: #faf0e6;
      border-radius: 1.25rem;

      .modal-header {
        border-bottom: unset;

        .modal-title {
          color: #7d644b;
          font-size: 1.875rem;
          font-weight: 700;

          small {
            display: block;
            font-size: 0.875rem;
            font-weight: 400;
          }
        }
      }
    }

    .form-control {
      color: #7d644b;
      background-color: transparent;
      font-size: 1.25rem;
      border-color: rgba(#000000, 0.25);
      border-radius: unset;
      padding-top: 0.875rem;
      padding-bottom: 0.875rem;

      &:focus {
        border-color: rgba(#000000, 0.75);
        box-shadow: unset;
      }
    }

    button {
      font-size: 1rem;
      font-weight: 700;
      border-radius: 1.875rem;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
    }
  }
</style>
