import React from "react";
import './ListItem.css'

type ListItemProps = {
    children: React.ReactNode,
    clicker: (date: Date, label: string) => void,
    date: Date,
    label: string
}

const ListItem = ({ children, clicker, date, label }: ListItemProps): JSX.Element => (
    <li className='listItem' onClick={ () => clicker(date, label) }>
        { children }
    </li>
)

export default ListItem