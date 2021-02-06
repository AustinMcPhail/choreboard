// Todo: A home component that:
// 1. Shows the top 3 highlighted bulletin board flyers
// 2. Shows a swipable list of jobs
// 3. Swipe right adds to "interested list", swipe left adds to "not interested list".
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ChoreList from '../components/ChoreList'
import ChorePostit from '../components/ChorePostit'
import { getAllChores } from '../utils/fire'

const HomeStyle = styled.div``

const Home = () => {
  const [chores, setChores] = useState([])
  useEffect(() => {
    getAllChores()
      .then((res) => {
        setChores(Object.keys(res).map((key) => res[key]))
      })
      .catch((err) => console.error(err))
  }, [])
  return (
    <HomeStyle>
      <h2>Home</h2>
      <ChoreList title="Featured" chores={chores} />
    </HomeStyle>
  )
}

export default Home
