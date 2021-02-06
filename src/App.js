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
import PosterBoard from './components/PosterBoard'
import ChorePostitLarge from './components/ChorePostitLarge'
import NewChore from './pages/NewChore'

const AppStyles = styled.div`
  max-height: 100vh;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    margin-top: 2rem;
    margin-inline: 1rem;
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
              <Route exact path="/chores">
                <Chores />
              </Route>
              <Route
                exact
                path="/profile/:id"
                component={(routerProps) => <Profile {...routerProps} />}
              />
              <Route path="/postit" component={ChorePostitLarge} />
              <Route exact path="/chores/new">
                <NewChore />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/test" component={PosterBoard} />
            </Switch>
          </main>
        </AppStyles>
      ) : (
        <Landing />
      )}
    </Router>
  )
}
export default App
