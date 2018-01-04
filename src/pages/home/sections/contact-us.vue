<template>
  <form>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="1234 Main St">
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <input type="email" class="form-control" placeholder="Email">
      </div>
      <div class="form-group col-md-6">
        <input type="password" class="form-control" placeholder="Password">
      </div>
    </div>
    <div class="form-group">
      <textarea class="form-control" rows="3"></textarea>
    </div>
    <button type="button" class="btn btn-primary" v-on:click="sendYourContact">Sign in</button>
  </form>
</template>

<script>
  import database from '@/plugins/firebase.js'

  export default {
    methods: {
      sendYourContact: function () {

        var customerId = database.ref().child('customers').push().key

        var updates = {};
        updates['/customers/' + customerId] = {
          name: 'Mai Anh Kha',
          email: 'maianhkha.dev@gmail.com',
          phone: '01218455821',
          message: ''
        }

        let a = database.ref().update(updates)
        console.log(a)
      }
    }
  }

  // firebase.auth().signInWithEmailAndPassword('maianhkha.dev@gmail.com', 'anhkha1811').catch(function (error) {
  //   console.log(error.code)
  //   console.log(error.message)
  // })
  // firebase.auth().signOut().then(function() {
  //
  // }).catch(function(error) {
  //
  // })
</script>
