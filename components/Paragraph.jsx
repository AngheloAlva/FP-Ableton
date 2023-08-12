/* eslint-disable no-unused-vars */
import React from 'react'

export const Paragraph = ({ title, text, text2 = '' }) => {
  return (
    <div className='paragraph'>
      <h3>
        {title}
      </h3>
      <p>
        {text}
      </p>
      <p>
        {text2}
      </p>
    </div>
  )
}
