import React from 'react'

const Header = ({ title }) => {
  return (
    <header>
        <h1 style={headingStyle}>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

const headingStyle = {
    color: 'white',
    background: 'black'
}

export default Header
