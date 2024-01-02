import React from 'react'
import OrderButton from '../atoms/OrderButton'

const NewsLetterDetails = () => {
  return (
    <div className='flex justify-center gap-2 gap-y-3 max-sm:flex-col'>
        <input className='px-3 py-2 sm:w-96' type='email' placeholder='Your Email id...' />
        <OrderButton type="NewsLetterLg" Text="Subscribe" />
    </div>
  )
}

export default NewsLetterDetails
