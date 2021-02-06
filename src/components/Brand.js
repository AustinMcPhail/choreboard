import React from 'react'
import styled from 'styled-components'

const BrandStyles = styled.div`
  flex-grow: 1;
  .title {
    &:after {
      content: 'Chore Board';
      display: block;
      text-align: center;
      color: black;
      mix-blend-mode: overlay;
    }
  }
`
const Brand = () => (
  <BrandStyles className="relative">
    <h1 className="title text-center text-6xl mb-0 font-bold relative">
      <div className="bg-blue-200 rounded-3xl w-full h-60 grid place-items-center absolute transform translate-x-1/2 -translate-y-1/2" />
    </h1>
  </BrandStyles>
)

export default Brand
