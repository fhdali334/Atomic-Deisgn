import React from 'react'

const AboutDetails = (props) => {
  return (
    <div>
      <div className='text-primary'>
        <h1 className='text-5xl font-bold font-primary'>{props.mainText}</h1>
        <p className='text-lg font-steelGray '>{props.mutedText}</p>
      </div>
    </div>
  )
}

export default AboutDetails
