import React from "react";
import './ListItem.css'

type ListItemProps = {
    children: React.ReactNode
}

const ListItem = ({ children }: ListItemProps): JSX.Element => (
    <li>
        { children }
    </li>
)

export default ListItem