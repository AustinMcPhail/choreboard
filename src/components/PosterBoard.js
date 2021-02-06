import React, { useState } from 'react'

function PosterBoard() {
  const [frontImg, setFrontImg] = useState(
    'https://canfar.com/wp-content/uploads/2018/02/En-Needles.jpg'
  )
  const [leftImg, setLeftImg] = useState(
    'https://s3.amazonaws.com/thumbnails.venngage.com/template/f5e28890-6c0a-47f5-bc08-1e842df9f988.png'
  )
  return (
    <div className="flex justify-center">
      <img src={frontImg} alt="" className="w-1/2 h-64" />
    </div>
  )
}

export default PosterBoard
