import React, { useState } from 'react'

function PosterBoard() {
  const [frontImg, setFrontImg] = useState(
    'https://canfar.com/wp-content/uploads/2018/02/En-Needles.jpg'
  )
  const [leftImg, setLeftImg] = useState(
    'https://s3.amazonaws.com/thumbnails.venngage.com/template/f5e28890-6c0a-47f5-bc08-1e842df9f988.png'
  )
  const [posterList, setPosterList] = useState([
    'https://canfar.com/wp-content/uploads/2018/02/En-Needles.jpg',
    'https://s3.amazonaws.com/thumbnails.venngage.com/template/f5e28890-6c0a-47f5-bc08-1e842df9f988.png',
  ])
  const [posterIndex, setPosterIndex] = useState(0)

  const flipPosterLeft = () => {
    console.log('Going Left!')
    if (posterIndex === 0) {
      setPosterIndex(posterList.length - 1)
    } else {
      setPosterIndex(posterIndex - 1)
    }
  }

  const flipPosterRight = () => {
    console.log('Going Right!')
    if (posterIndex === posterList.length - 1) {
      setPosterIndex(0)
    } else {
      setPosterIndex(posterIndex + 1)
    }
  }

  return (
    <div className="flex justify-between">
      <div className="my-auto w-1/4 flex justify-center">
        <button onClick={flipPosterLeft} type="button" className="w-1/2">
          {'<'}
        </button>
      </div>
      <img src={posterList[posterIndex]} alt="" className="w-1/2 h-64" />
      <div className="my-auto w-1/4 flex justify-center">
        <button onClick={flipPosterRight} type="button" className="w-1/2">
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default PosterBoard
