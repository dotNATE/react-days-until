import React from "react"
import './Button.css'

type ButtonProps = {
    date: Date,
    content: string,
    clicker: any
}

const Button = (props: ButtonProps): JSX.Element => <button onClick={ () => props.clicker( props.date, props.content ) }>{ props.content }</button>

export default Button