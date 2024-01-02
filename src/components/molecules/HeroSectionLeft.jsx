import React from 'react'
import OrderButton from '../atoms/OrderButton'
import ListPage from '../atoms/Listpage'

const HeroSectionLeft = (props) => {
  return (
    <div className='flex flex-col md:pr-[6vw] gap-y-4 md:py-[10vw] py-[8vw] max-lg:px-[6vw] '>   
        <p className='pl-5 italic text-white lg:text-2xl font-primary'>{props.starter}</p>
        <h1 className='md:w-[600px]  w-[80vw] tracking-wide pb-4 font-bold text-white text-4xl md:text-6xl font-primary'>{props.heading}</h1>
        <p className='tracking-tighter lg:text-xl font-secondary text-muted'>{props.headingText}</p>
        <div className='flex py-9'>
            <OrderButton Text="Order Today" type="primaryLg" />
            <button className= ' underline-offset-8 px-[2vw] py-[1vw] text-lg font-bold font-primary text-white tracking-wider   underline'>Read Free Demo{props.textBtn}</button>
        </div>
        <div className='gap-8 lg:flex'>
            <ListPage color="text-secondary text-3xl " mainText="Pages:" mutedText="268 pages"  textColor="text-white"/>
            <ListPage color="text-secondary text-3xl" mainText="Length:" mutedText="10 Hours" textColor="text-white"/>
            <ListPage color="text-secondary text-3xl" mainText="Ratings:" mutedText="4.5/5 (305 ratings)" textColor="text-white"/>
        </div>
    </div>
  )
}

export default HeroSectionLeft
