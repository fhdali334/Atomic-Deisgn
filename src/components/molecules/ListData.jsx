import React from 'react'
import ListPage from '../atoms/Listpage'

const ListData = (props) => {

const listNum = props.listNum

    return (
        <div className='flex'>
            {
                listNum.map((data) => (
                    <ListPage color={props.color} mainText={ data.mainText } mutedText={ data.mutedText } />
                )
                ) }
        </div>
    )
}

export default ListData