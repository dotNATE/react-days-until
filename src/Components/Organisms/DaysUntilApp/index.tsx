import React, { useState } from "react"

import Header1 from "../../Atoms/Header1"
import DateButtonsBox from "../../Molecules/DateButtonsBox"
import Button from "../../Atoms/Button/Button"

import getDaysUntil from "../../../Functions/getDaysUntil";

const DaysUntilApp = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [selectedDateString, setSelectedDateString] = useState("Today")

    const handleClick = (date: Date, dateString: string): void => {
        setSelectedDate(date)
        setSelectedDateString(dateString)
    }

    return (
        <React.StrictMode>
            <Header1 content={ "There are " + getDaysUntil(selectedDate) + " days until " + selectedDateString } />
            <DateButtonsBox>
                <Button date={new Date(2021, 11, 25)} content="Christmas" clicker={ handleClick } />
                <Button date={new Date(2022, 0, 1)} content="New Years Day" clicker={ handleClick } />
                <Button date={new Date(2022, 1, 14)} content="Valentines Day" clicker={ handleClick } />
            </DateButtonsBox>
        </React.StrictMode>
    )
}

export default DaysUntilApp