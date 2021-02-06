import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ChorePostit from '../components/ChorePostit'
import '../styles/dolfer.scss'

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
      {/* <h2>Chores</h2> */}
      <Link to="/chores/new">Post</Link>
      <div className="bg-dolfer h-auto pb-64 relitive rounded-md">
        <div className="center-notch" />
        <div className="left-notch" />
        <div className="right-notch" />
        <div className="flex justify-between">
          <h4 className="pl-4 m-0">Chores</h4>
          <h4 className="pr-6 m-0 text-blue-500">+</h4>
        </div>
        <div className="flex flex-wrap justify-center pt-5">
          <ChorePostit />
          <ChorePostit />
        </div>
      </div>
    </div>
  )
}

export default Chores
