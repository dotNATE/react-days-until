import React from "react";
import './SidebarItem.css'
import ListItem from "../../../Atoms/ListItem";
import ListItemText from "../../../Atoms/ListItemText";
import List from "../../../Atoms/List";

type dateObject = {
    name: string,
    label: string,
    date: Date,
    dates?: Array<dateObject>
}

type SidebarItemProps = {
    label: string,
    date: Date,
    clicker: (date: Date, label: string) => void,
    dates?: Array<dateObject>
}

const SidebarItem = ({label, clicker, date, dates: subDates}: SidebarItemProps): JSX.Element => (
    <>
    <ListItem label={ label } date={ date } clicker={ () => clicker(date, label) }>
        <ListItemText label={ label } />
    </ListItem>
        {
            Array.isArray(subDates) ? (
                <List>
                    {
                        subDates.map((subDate) => (
                            <SidebarItem label={subDate.label} date={subDate.date} clicker={clicker} dates={subDate.dates}/>
                        ))
                    }
                </List>
            ) : null
        }
    </>
)

export default SidebarItem