import React from 'react'

function ChorePostit() {
  return (
    <div className="bg-yellow-300 w-3/4 mx-auto mt-32 h-28 flex relative">
      <img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/man-shoveling-snow-in-winter-royalty-free-image-1568812390.jpg?resize=980:*"
        alt=""
        className="w-32 p-2"
      />
      <div className="p-2 pl-0">
        <h4 className="text-sm m-0 text font-bold">Snow Shovelling</h4>
        <h4 className="text-sm m-0">Posted: today</h4>
      </div>
      <div>
        <img src="" alt="a pin" />
        <h4 className="text-xl font-bold m-0">$10</h4>
      </div>
      <div className="bg-yellow-500 w-10 h-10 absolute right-0 bottom-0" />
      <div className="bg-white transform -rotate-45 w-16 h-10 absolute -right-6 -bottom-5" />
    </div>
  )
}

export default ChorePostit
