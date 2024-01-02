import React from 'react'

const PersonDetails = (props) => {
  return (
    <div>
      <h2 className='font-primary font-bold text-xl text-secondary'>{props.name}</h2>
      <p className='font-secondary text-lg text-steelGray'>Mail:{props.email}</p>
      <p className='font-secondary text-lg text-steelGray'>Phone:{props.phone}</p>
    </div>
  )
}

export default PersonDetails
