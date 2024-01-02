import React, { useEffect, useState } from 'react'

const OrderButton = (props) => {
    const [btnStyle, setbtnStyle] = useState("");
    useEffect(() => {
        if (props.type === "primaryLg") {
            setbtnStyle("px-10 py-3 font-primary font-bold text-lg text-primary bg-secondary")
        }
        else if (props.type === "primarySm") {
            setbtnStyle(" px-6 py-2 font-primary font-bold text-lg text-primary bg-secondary")
        }
        else if (props.type === "secondaryLg") {
            setbtnStyle("border-2 px-10 py-3  font-primary font-bold text-lg text-primary")
        }
        else if (props.type === "secondarySm") {
            setbtnStyle("border-2 px-6 py-2 font-primary font-bold text-lg text-primary")
        }
        else if (props.type === "NewsLetterLg") {
            setbtnStyle(" px-12 py-2 font-primary text-lg text-white bg-primary")
        }
    }, [props.type])



    return (
        <div>
            <button  className={`${ btnStyle } ${ props.borderColor }`}>
                { props.Text }
            </button>
        </div>
    )
}

export default OrderButton