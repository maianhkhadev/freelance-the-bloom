import * as firebase from 'firebase'

import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
  apiKey: 'AIzaSyCoSZyLY2ToChUrPvlR0cuUahdIgUp9mWQ',
  authDomain: 'the-bloom.firebaseapp.com',
  databaseURL: 'https://the-bloom.firebaseio.com',
  projectId: 'the-bloom',
  storageBucket: '',
  messagingSenderId: '1037090201339'
})

let database = firebase.database()

export default database
