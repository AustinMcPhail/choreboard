import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { getAllChores } from '../utils/fire'

const Chores = () => {
  const [chores, setChores] = useState([])
  useEffect(() => {
    getAllChores()
      .then((res) => {
        console.log('res', res)
        setChores(res)
      })
      .catch((err) => console.error(err))
  }, [])
  return (
    <div>
      <h2>Chores</h2>
      <Link to="/chores/new">Post</Link>
    </div>
  )
}

export default Chores
