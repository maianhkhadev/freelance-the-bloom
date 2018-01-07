import database from '@/plugins/firebase.js'

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
