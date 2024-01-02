import React from 'react'

const ServicesDetails = (props) => {
  return (
    <div className='bg-softBlue  w-[290px] flex flex-col gap-y-8 p-6 font-bold text-xl text-primary font-primary'>
      <p className='w-12 h-12 p-2 text-center rounded-full bg-secondary'>{props.number}</p>
      <p>{props.text}</p>
    </div>
  )
}

export default ServicesDetails
