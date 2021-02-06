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

export const writeChore = ({ uid }, chore) =>
  fire
    .database()
    .ref('chores')
    .push({
      uid,
      ...chore,
    })

export const getUserInfo = (id) => {
  fire
    .database()
    .ref(`users/${id}`)
    .once('value')
    .then((snapshot) => {
      const user = snapshot.val()
      console.log(`getting user info for: ${user}`)
    })
}
export const getAllChores = () =>
  fire
    .database()
    .ref('chores')
    .once('value')
    .then((res) => res.val())

export const getChore = (id) =>
  fire
    .database()
    .ref(`chores/${id}`)
    .once('value')
    .then((res) => res.val())

export default fire
