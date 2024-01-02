import React from 'react'
import ListIcon from "../atoms/ListIcon";

const Listmenu = (props) => {
  return (
    <div className=''>
      <li className="flex items-center gap-4 text-muted font-secondary">
                <ListIcon />
                <a href={props.link}>{props.mutedText}</a>
            </li>
    </div>
  )
}

export default Listmenu
