import React from "react"

type Header1Props  = {
    content: string
}

const Header1 = (props: Header1Props): JSX.Element => <h1>{ props.content }</h1>

export default Header1