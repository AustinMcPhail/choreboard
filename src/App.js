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
import fire, { writeChore } from './utils/fire'
import ChorePostit from './components/ChorePostit'
import ChorePostitLarge from './components/ChorePostitLarge'

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
    fire.auth().onAuthStateChanged((user) => {
      setIsAuthed(!!user)
    })
  }, [])

  return (
    <Router>
      <GlobalStyles />
      <Header />
      {isAuthed ? (
        <AppStyles>
          <Nav />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/chores">
                <Chores />
              </Route>
              <Route
                exact
                path="/profile/:id"
                component={(routerProps) => <Profile {...routerProps} />}
              />
              <Route path="/postit" component={ChorePostitLarge} />
            </Switch>
          </main>
          <button
            className="py-1 px-4 text-red-500"
            onClick={() => writeChore()}
            type="button"
          >
            Send test to db
          </button>
          <button
            className="py-1 px-4 text-red-500"
            onClick={() => fire.auth().signOut()}
            type="button"
          >
            Sign Out
          </button>
        </AppStyles>
      ) : (
        <Landing />
      )}
    </Router>
  )
}
export default App
