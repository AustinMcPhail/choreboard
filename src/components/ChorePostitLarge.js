import React from 'react'

function ChorePostitLarge() {
  return (
    <div className="bg-yellow-300 w-3/4 mx-auto mt-32 h-auto flex relative flex-wrap">
      <img src="" alt="a pin" className="absolute right-0 pr-2" />
      <div className="w-3/4 pt-5 pl-5">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/man-shoveling-snow-in-winter-royalty-free-image-1568812390.jpg?resize=980:*"
          alt=""
          className="w-full shadow-sm"
        />
      </div>
      <div className="p-2 pl-5 w-1/2">
        <h4 className="text-sm m-0 text font-bold">Snow Shovelling</h4>
        <h4 className="text-sm m-0">Posted: today</h4>
      </div>
      <div className="p-2 pl-0 w-1/2">
        <h4 className="text-xl font-bold m-0">$10</h4>
      </div>
      <div className="p-2 pl-5 w-3/4">
        <h4 className="text-sm m-0 text font-bold">Description:</h4>
        <h4 className="text-sm m-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          asperiores alias ad amet optio, eius deleniti ratione aliquid
          voluptatum, eveniet quam nemo dolorem velit consequuntur ducimus. Quam
          nesciunt non placeat.
        </h4>
      </div>
      <div className="bg-yellow-500 w-10 h-10 absolute right-0 bottom-0" />
      <div className="bg-white transform -rotate-45 w-16 h-10 absolute -right-6 -bottom-5" />
    </div>
  )
}

export default ChorePostitLarge
