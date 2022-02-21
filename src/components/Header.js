import React from 'react'
import reactIconSmall from '../images/react-icon-small.png'

export default function Header() {
    return (
        <header>
            <nav className="container">
                <img src={reactIconSmall}></img>
                <h1>ReactFacts</h1>
                <p>React Course - Project 1</p>
            </nav>
        </header>
    )
}