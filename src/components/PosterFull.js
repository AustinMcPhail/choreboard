import React from 'react'
import '../styles/posterFull.scss'

function PosterFull() {
  const exitBttn = () => {
    console.log('Exit button pressed')
  }
  return (
    <div className=" flex flex-col w-screen h-screen absolute top-0 left-0 bg-white overflow-y-hidden">
      <div className="">
        <button
          type="button"
          className="mb-10 p-2 ml-5 rounded-full mt-2 bg-red-200"
          onClick={exitBttn}
        >
          X
        </button>
        <div className="flex justify-end content-end">
          <h4 className="m-0 text-sm mr-5">Posted: 2020-08-03</h4>
        </div>
      </div>
      <div className="flex justify-center content-center mb-10">
        <img
          src="https://s3.amazonaws.com/thumbnails.venngage.com/template/f5e28890-6c0a-47f5-bc08-1e842df9f988.png"
          alt=""
          className="px-2"
        />
      </div>
      {/* <div className="ticket-holder flex">
        <div className="ticket">
          <h4 className="ticket__text">take a ticket</h4>
        </div>
        <div className="ticket">
          <h4 className="ticket__text">take a ticket</h4>
        </div>
        <div className="ticket">
          <h4 className="ticket__text">take a ticket</h4>
        </div>
      </div> */}
      <div className="flex justify-end pr-5">
        <button className="bg-blue-400 px-5 rounded-xl" type="button">
          Contact
        </button>
      </div>
    </div>
  )
}

export default PosterFull
