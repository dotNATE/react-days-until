import React from "react";
import './Sidebar.css'
import List from "../../Atoms/List";
import SidebarItem from "./SidebarItem";

type dateObject = {
    name: string,
    label: string,
    date: Date,
    dates?: Array<dateObject>
}

type SidebarProps = {
    dates: Array<dateObject>,
    clicker: any
}

const Sidebar = ({ dates, clicker }: SidebarProps): JSX.Element => (
    <List>
        {
            Array.isArray(dates) ? (
                dates.map((date) => (
                    <SidebarItem label={date.label} date={date.date} clicker={clicker} dates={date.dates} />
                ))
            ) : null
        }
    </List>
)

export default Sidebar