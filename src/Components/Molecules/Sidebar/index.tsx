import React from "react";
import './Sidebar.css'
import List from "../../Atoms/List";

type dateObject = {
    name: string,
    label: string,
    date: Date,
    dates?: Array<dateObject>
}

type SidebarProps = {
    dates: Array<dateObject>
}

const Sidebar = ({ dates }: SidebarProps): JSX.Element => (
    <List>

    </List>
)

export default Sidebar