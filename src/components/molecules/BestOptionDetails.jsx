import React from 'react'

const BestOptionDetails = (props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-8'>
      <img className=' h-20' src={props.image} alt='Best options' />
      <h1 className='font-primary text-primary text-2xl font-bold leading-relaxed'>{props.mainText}</h1>
      <p className='font-secondary text-steelGray text-lg leading-loose text-center'>{props.mutedText}</p>
    </div>
  )
}

export default BestOptionDetails
