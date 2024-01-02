import React from 'react'

const ListPage = (props) => {
    
    return (
            <li className={props.color}>
                <span className={`sm:pr-5 pr-2 text-xl font-bold  ${props.textColor}`}>
                    { props.mainText }
                    
                </span>
                <p className='pl-10 text-base text-muted'>{ props.mutedText }</p>
                
            </li>
    )
}

export default ListPage