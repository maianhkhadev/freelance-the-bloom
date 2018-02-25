<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-6">
        <h1 class="mb-4">Danh sách đơn hàng</h1>
      </div>
    </div>
    <template v-for="bill in bills">
      <div class="bill">
        <div class="row">
          <div class="col-xl-6">
            <div class="title">Khách hàng</div>
            <div class="text">Tên: <b>{{ bill.customer.name }}</b></div>
            <div class="text">SDT: <b>{{ bill.customer.phone }}</b></div>
            <div class="text">Tổng tiền: <b>{{ bill.totalPrice | currency }}<sup>đ</sup></b></div>
            <div class="text">Giờ đặt: <b>{{ bill.datetime }}</b></div>
          </div>
          <div class="col-xl-6">
            <div class="title">Sản phẩm được đặt</div>
            <ul>
              <template v-for="order in bill.orders">
                <li class="text">Sản phẩm: <b>{{ order.name }}</b> - Số lượng: <b>{{ order.amount }}</b></li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import database from '@/plugins/firebase.js'

  export default {
    data () {
      return {
        bills: [

        ]
      }
    },
    components: {

    },
    mounted () {
      let self = this
      let leadsRef = database.ref('bills');
      leadsRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          let bill = childSnapshot.val()
          bill.totalPrice = 0
          bill.orders.forEach(function(order) {
            bill.totalPrice += order.price * order.amount
          })
          console.log(childSnapshot)
          self.bills.push(bill)
        })
      })
    }
  }
</script>

<style lang="scss" scoped>
  .bill {
    border: 0.0625rem solid #000000;
    border-radius: 1.25rem;
    padding: 1.25rem;
    margin-bottom: 1.25rem;

    .title {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
    }

    .text {
      margin-bottom: 0.75rem;
    }
  }
</style>
