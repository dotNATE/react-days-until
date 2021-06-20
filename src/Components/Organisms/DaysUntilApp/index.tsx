import React, { useState } from "react"

import Header1 from "../../Atoms/Header1"
import DateButtonsBox from "../../Molecules/DateButtonsBox"
import Button from "../../Atoms/Button"

import getDaysUntil from "../../../Functions/getDaysUntil";
import Sidebar from "../../Molecules/Sidebar";
import StyleMinWidth from "../../Styles/MinWidth";

const DaysUntilApp = () => {
    const [selectedDate, setSelectedDate] = useState(new Date(2021, 5, 21))
    const [selectedDateString, setSelectedDateString] = useState("Nathaniel can start at Sysdoc!")

    const handleClick = (date: Date, dateString: string): void => {
        setSelectedDate(date)
        setSelectedDateString(dateString)
    }

    const dates = [
        { name: 'xmas', label: 'Christmas', date: new Date(2021, 11, 25) },
        { name: 'new-years-day', label: 'New Years Day', date: new Date(2022, 0, 1) },
        { name: 'valentines-day', label: 'Valentines Day', date: new Date(2022, 1, 14) },
        {
            name: 'xmas',
            label: 'UK 2022 Bank Holidays',
            date: new Date(2022, 1, 14),
            dates: [
                { name: 'new-years-day-bh', label: 'New Years Day', date: new Date(2022, 0, 1) },
                { name: 'good-fri-bh', label: 'Good Friday', date: new Date(2022, 3, 15) },
                { name: 'easter-bh', label: 'Easter Monday', date: new Date(2022, 3,18) },
                { name: 'may-bh', label: 'Early May Bank Holiday', date: new Date(2022, 4, 2) },
                { name: 'spring-bh', label: 'Spring Bank Holiday', date: new Date(2022, 5, 2) },
                { name: 'jubilee-bh', label: 'Platinum Jubilee Bank Holiday', date: new Date(2022, 5, 3) },
                { name: 'summer-bh', label: 'Summer Bank Holiday', date: new Date(2022, 7, 29) },
                {
                    name: 'xmas',
                    label: 'Christmas 2022',
                    date: new Date(2022, 11, 25),
                    dates: [
                        { name: 'boxing-day-bh', label: 'Boxing Day', date: new Date(2022, 11, 26) },
                        { name: 'xmas-bh', label: 'Christmas Bank Holiday', date: new Date(2022, 11, 27) }
                    ]
                },
            ]
        },
    ]

    return (
        <React.StrictMode>
            <StyleMinWidth num={ 90 } unit={ 'ch' } >
                <Header1 content={ "There are " + getDaysUntil(selectedDate) + " days until " + selectedDateString } />
                <DateButtonsBox>
                    <Button date={new Date(2021, 11, 25)} content="Christmas" clicker={ handleClick } />
                    <Button date={new Date(2022, 0, 1)} content="New Years Day" clicker={ handleClick } />
                    <Button date={new Date(2022, 1, 14)} content="Valentines Day" clicker={ handleClick } />
                </DateButtonsBox>
            </StyleMinWidth>
            <Sidebar dates={ dates } clicker={ handleClick } />
        </React.StrictMode>
    )
}

export default DaysUntilApp