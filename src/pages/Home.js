// Todo: A home component that:
// 1. Shows the top 3 highlighted bulletin board flyers
// 2. Shows a swipable list of jobs
// 3. Swipe right adds to "interested list", swipe left adds to "not interested list".
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ChoreList from '../components/ChoreList'
import ChorePostit from '../components/ChorePostit'
import PosterBoard from '../components/PosterBoard'
import { getAllChores } from '../utils/fire'

const HomeStyle = styled.div``

const Home = () => {
  const [chores, setChores] = useState([])
  useEffect(() => {
    getAllChores()
      .then((res) => {
        if (res) {
          setChores(Object.keys(res).map((key) => res[key]))
        }
      })
      .catch((err) => console.error(err))
  }, [])
  return (
    <>
      <div className="mb-4">
        <PosterBoard />
      </div>
      {chores?.length > 0 && <ChoreList title="Featured" chores={chores} />}
      {!chores?.length && (
        <p className="text-sm text-center">No Chores Posted...</p>
      )}
    </>
  )
}

export default Home
