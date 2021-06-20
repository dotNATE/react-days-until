import React from "react";
import './ListItemText.css'

type ListItemTextProps = {
    label: string
}

const ListItemText = ({ label }: ListItemTextProps):JSX.Element => (
    <p className='listItemText'>{ label }</p>
)

export default ListItemText