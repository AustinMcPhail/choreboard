import React from 'react'
import { Link } from 'react-router-dom'
/* eslint react/prop-types: 0 */

function ChorePostit({
  id = '',
  tasks = [],
  expiry = '',
  description = 'hello',
}) {
  return (
    <Link to={`/chores/${id}`}>
      <div className="bg-yellow-200 grid grid-cols-2 p-4 rounded-sm relative w-full">
        <div>
          <img
            className="absolute top-0 right-0 block bg-red-500 w-6 h-6 rounded-full transform -translate-y-2 shadow-lg"
            src=""
            alt=""
          />
          <div className="object-fit pr-2">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/man-shoveling-snow-in-winter-royalty-free-image-1568812390.jpg?resize=980:*"
              alt=""
              className="w-40 transform -rotate-2"
            />
          </div>
          <div className="w-full">
            <small>Expiry of {expiry}</small>
            <h4 className="text-xl font-bold">
              <span className="bg-green-300 p-3 rounded-lg">
                ${tasks.reduce((curr, prev) => curr + prev, 0)}
              </span>
            </h4>
          </div>
          <div className="bg-yellow-200 w-10 h-10 absolute right-0 bottom-0" />
          <div className="transform -rotate-45 w-16 h-10 absolute -right-6 -bottom-5" />
        </div>
        <div>
          <h4 className="m-0 text text-xl font-bold">{description}</h4>
          <ul>
            {tasks.map((t) => (
              <li className="flex justify-between">
                <p>{t.title}</p>
                <p>${t.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  )
}

export default ChorePostit
