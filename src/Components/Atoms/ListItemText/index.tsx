import React from "react";
import './ListItemText.css'

type ListItemTextProps = {
    label: string,
    clicker: (date: Date, label: string) => void,
    date: Date
}

const ListItemText = ({ label, clicker, date }: ListItemTextProps):JSX.Element => (
    <p className='listItemText' onClick={ () => clicker(date, label) }>{ label }</p>
)

export default ListItemText