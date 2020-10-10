import React from 'react'

export default function Header ({ text }) {
    return (
        <header>
            <h1 data-testid="header-tag" className="headerStyle">{text}</h1>
        </header>
    )
}