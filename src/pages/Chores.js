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
        setChores(Object.keys(res).map((key) => res[key]))
      })
      .catch((err) => console.error(err))
  }, [])
  return (
    <div>
      <h2>All Chores</h2>
      <ChoreList chores={chores} />
      <h2>Assigned Chores</h2>
      <ChoreList chores={chores} />
    </div>
  )
}

export default Chores
