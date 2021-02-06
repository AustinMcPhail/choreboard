// Todo: A home component that:
// 1. Shows the top 3 highlighted bulletin board flyers
// 2. Shows a swipable list of jobs
// 3. Swipe right adds to "interested list", swipe left adds to "not interested list".
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ChorePostit from '../components/ChorePostit'
import { getAllChores } from '../utils/fire'

const HomeStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1fr, 400px));
`

const Home = () => {
  const [chores, setChores] = useState([])
  useEffect(() => {
    getAllChores()
      .then((res) => {
        console.log(
          Object.keys(res).map((key) => {
            const val = res[key]
            val.id = key
            return val
          })
        )
        setChores(Object.keys(res).map((key) => res[key]))
      })
      .catch((err) => console.error(err))
  }, [])
  return (
    <HomeStyle>
      <h2>Chores</h2>
      <div className="folder">
        {chores &&
          chores.map((chore, index) => (
            <div className="mb-6">
              <ChorePostit id={chore?.id} key={index} />
            </div>
          ))}
      </div>
    </HomeStyle>
  )
}

export default Home
