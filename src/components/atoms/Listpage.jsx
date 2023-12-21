import React from 'react'

const ListPage = (props) => {
    
    return (
        <div>
            <li className={props.color}>
                <span className='text-black'>
                    { props.mainText }
                </span>

            </li>
            <p className='text-xs text-end'>{ props.mutedText }</p>
        </div>
    )
}

export default ListPage