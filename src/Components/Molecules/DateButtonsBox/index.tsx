import React from "react"

type DateButtonsBoxProps = {
    children: any
}

const DateButtonsBox = (props: DateButtonsBoxProps): JSX.Element => {
    return (
        <div className="dateButtonsBox">
            { props.children }
        </div>
    )
}

export default DateButtonsBox