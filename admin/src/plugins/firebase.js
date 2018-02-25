import * as firebase from 'firebase'

import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
  apiKey: 'AIzaSyBEnn1gjV9Vn0Qkmt5bmIe2CLhN6pnIZYk',
  authDomain: 'the-bloom-3faf6.firebaseapp.com',
  databaseURL: 'https://the-bloom-3faf6.firebaseio.com',
  projectId: 'the-bloom-3faf6',
  storageBucket: 'the-bloom-3faf6.appspot.com',
  messagingSenderId: '471018702583'
})

let database = firebase.database()

export default database
