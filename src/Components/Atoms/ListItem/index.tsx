import React from "react";
import './ListItem.css'

type ListItemProps = {
    children: React.ReactNode
}

const ListItem = ({ children }: ListItemProps): JSX.Element => (
    <li className='listItem'>
        { children }
    </li>
)

export default ListItem