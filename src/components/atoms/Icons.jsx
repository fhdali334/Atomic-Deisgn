import React, { useEffect, useState } from 'react'


function Icons(props) {

    const [iconColor, setIconColor] = useState()

    useEffect(() => {
        if (props.type === "primaryIcon") {
            setIconColor("bg-white text-primary md:p-2  text-lg p-1")
        }
        else if (props.type === "secondaryIcon") {
            setIconColor("border border-secondary md:p-2 text-white text-lg p-1 border-opacity-50")
        }
    }, [props.type])
    


  return (
    <div className={iconColor}>
      { props.Icon}
    </div>
  )
}

export default Icons
