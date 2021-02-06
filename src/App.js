import 'firebase/auth'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header'
import Landing from './components/Landing'
import Nav from './components/Nav'
import Home from './pages/Home'
import Chores from './pages/Chores'
import Profile from './pages/Profile'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
} else {
  firebase.app()
}

const AppStyles = styled.div`
  max-height: 100vh;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    overflow-y: auto;
    height: 100%;
  }
`

const App = () => {
  const [isAuthed, setIsAuthed] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsAuthed(!!user)
    })
  }, [])

  return (
    <Router>
      <GlobalStyles />
      <Header />
      {isAuthed ? (
        <AppStyles>
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/chores">
                <Chores />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </main>
          <button
            className="py-1 px-4 text-red-500"
            onClick={() => firebase.auth().signOut()}
            type="button"
          >
            Sign Out
          </button>
          <Nav />
        </AppStyles>
      ) : (
        <Landing />
      )}
    </Router>
  )
}
export default App
