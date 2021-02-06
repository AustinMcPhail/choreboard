import 'firebase/auth'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'
import { FirebaseAuth } from 'react-firebaseui'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header'
import Landing from './components/Landing'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
} else {
  firebase.app()
}

const App = () => {
  const [isAuthed, setIsAuthed] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsAuthed(!!user)
    })
  }, [])

  return (
    <>
      <GlobalStyles />
      <Header />
      {isAuthed ? (
        <>
          <div className="p-10 rounded-md shadow-md bg-green-500 mx-2">
            <p className="text-white text-2xl">Authed</p>
            <button onClick={() => firebase.auth().signOut()} type="button">
              Sign Out
            </button>
          </div>
        </>
      ) : (
        <Landing />
      )}
    </>
  )
}
export default App
