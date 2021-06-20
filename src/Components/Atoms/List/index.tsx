import React from "react";
import './List.css'

type ListProps = {
    children: React.ReactNode
}

const List = ({ children }: ListProps):JSX.Element => (
    <ul className='list'>
        { children }
    </ul>
)

export default List