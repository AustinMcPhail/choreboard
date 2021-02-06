import React from 'react'
import styled from 'styled-components'
import logo from './logo_color.svg'

const BrandStyles = styled.div`
  h1 {
    font-size: clamp(1rem, 6vw, 3rem);
  }
`
const Brand = () => (
  <BrandStyles className="p-4">
    <div className="flex justify-end">
      <img className="w-1/5" src={logo} alt="logo" />
    </div>
    <h1 className="text-right text-5xl mb-0 font-bold">Choreboard</h1>
  </BrandStyles>
)

export default Brand
