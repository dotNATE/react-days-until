import React from "react"
import './Header1.css'

type Header1Props  = {
    content: string
}

const Header1 = (props: Header1Props): JSX.Element => <h1>{ props.content }</h1>

export default Header1