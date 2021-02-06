import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyA4q8PR7maTIJlNsg0Di8OI9V4eYYa1MTc',
  authDomain: 'choreboard-32541.firebaseapp.com',
  databaseURL: 'https://choreboard-32541-default-rtdb.firebaseio.com',
  projectId: 'choreboard-32541',
  storageBucket: 'choreboard-32541.appspot.com',
  messagingSenderId: '290120382749',
  appId: '1:290120382749:web:6196030ccbeca6446bc9f4',
}

const fire = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(config)

export const writeChore = (chore) => {
  fire.database().ref('chores').push({
    user: chore.user,
    desc: 'description',
    expiry: new Date().toISOString(),
  })
}

export default fire
