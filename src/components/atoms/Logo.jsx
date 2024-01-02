import React from 'react'

const Logo = (props) => {
  return (
    <div className='flex gap-[0.5vw]'>
        <img className='item-center h-7' src={props.image} alt="Logo" />
        <h1 className='text-2xl font-bold text-center text-white font-secondary'>{props.text}</h1>
    </div>
  )
}

export default Logo