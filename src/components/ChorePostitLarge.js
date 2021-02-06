/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { getChore } from '../utils/fire'

function ChorePostitLarge({ match }) {
  const { id } = match.params
  console.log(id)

  const [chore, setChore] = useState(null)
  useEffect(() => {
    getChore(id)
      .then((res) => {
        console.log(res)
        setChore(res)
      })
      .catch((err) => console.error(err))
  }, [])

  if (!chore) return <div>Loading...</div>

  return (
    <>
      <div className="bg-yellow-200 h-auto flex relative flex-wrap mt-4">
        <img
          className="absolute top-0 right-0 block bg-red-500 w-6 h-6 rounded-full transform -translate-y-2 shadow-lgs"
          src=""
          alt=""
        />
        <div className="w-3/4 pt-5 pl-5">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/man-shoveling-snow-in-winter-royalty-free-image-1568812390.jpg?resize=980:*"
            alt=""
            className="w-full shadow-sm"
          />
        </div>
        <div className="p-2 pl-5 w-1/2">
          <h2 className="text-xl m-0 text font-bold">{chore.details}</h2>
          <h4 className="text-sm m-0">Posted: today</h4>
        </div>
        <div className="p-2 pl-0 w-1/2">
          <h4 className="text-xl font-bold m-0">$10</h4>
        </div>
        <div className="p-2 pl-5 w-3/4">
          <h4 className="text-sm m-0 text font-bold">Tasks:</h4>
          {chore.tasks &&
            chore.tasks.length &&
            chore.tasks.map((t) => (
              <div className="flex justify-between items-center">
                <span>{t.taskTitle}</span>
                <hr className="border-1 mx-2 h-full border-red-200 w-full" />
                <span>${t.taskValue}</span>
              </div>
            ))}
        </div>
        <div className="bg-yellow-500 w-10 h-10 absolute right-0 bottom-0" />
        <div className="bg-white transform -rotate-45 w-16 h-10 absolute -right-6 -bottom-5" />
      </div>
    </>
  )
}

export default ChorePostitLarge
