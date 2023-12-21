import React from 'react'

const Logo = (props) => {
  return (
    <div className='flex'>
        <img className=' h-7' src={props.image} alt="Logo" />
        <h1 className=' font-interFont text-2xl text-white'>{props.text}</h1>
    </div>
  )
}

export default Logo