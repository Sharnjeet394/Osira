import React from 'react'
import './HeadingText.scss'

const HeadingText = ({heading,info}) => {
  return (
    <div className='heading_text'>
      <h2>{heading}</h2>
      {info && <p>{info}</p>}
    </div>
  )
}

export default HeadingText
