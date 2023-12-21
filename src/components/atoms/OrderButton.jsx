import React, { useEffect, useState } from 'react'

const OrderButton = (props) => {
    const [btnStyle, setbtnStyle] = useState("");
    useEffect(() => {
        if (props.type === "primaryLg") {
            setbtnStyle("border-2 px-8 py-3 font-cardoFont font-bold text-xl text-calalinaBlue bg-sunGlow")
        }
        else if (props.type === "primarySm") {
            setbtnStyle("border-2 px-6 py-2 font-cardoFont font-bold text-xl text-calalinaBlue bg-sunGlow")
        }
        else if (props.type === "secondaryLg") {
            setbtnStyle("border-2 px-8 py-3  font-cardoFont font-bold text-xl text-calalinaBlue")
        }
        else if (props.type === "secondarySm") {
            setbtnStyle("border-2 px-6 py-2 font-cardoFont font-bold text-xl text-calalinaBlue")
        }
    }, [props.type])



    return (
        <div>
            <button className={ btnStyle }>
                { props.Text }
            </button>
        </div>
    )
}

export default OrderButton