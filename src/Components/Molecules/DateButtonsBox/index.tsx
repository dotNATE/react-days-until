import React from "react"
import './DateButtonsBox.css'

type DateButtonsBoxProps = {
    children: React.ReactNode
}

const DateButtonsBox = (props: DateButtonsBoxProps): JSX.Element => {
    return (
        <div className="dateButtonsBox">
            { props.children }
        </div>
    )
}

export default DateButtonsBox