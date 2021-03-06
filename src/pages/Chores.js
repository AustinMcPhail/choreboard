import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ChoreList from '../components/ChoreList'
import ChorePostit from '../components/ChorePostit'
import '../styles/dolfer.scss'

import { getAllChores } from '../utils/fire'

const Chores = () => {
  const [chores, setChores] = useState([])
  useEffect(() => {
    getAllChores()
      .then((res) => {
        if (res)
          setChores(
            Object.keys(res).map((key) => {
              res[key].id = key
              return res[key]
            })
          )
      })
      .catch((err) => console.error(err))
  }, [])
  return (
    <div>
      <div className="mb-4">
        <ChoreList title="All Chores" chores={chores} />
      </div>
      <div>
        <ChoreList title="Assigned" chores={chores} />
      </div>
    </div>
  )
}

export default Chores
