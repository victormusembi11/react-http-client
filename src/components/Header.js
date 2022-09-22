import React from 'react'

const Header = ({ title }) => {
  return (
    <header>
        <h1 style={{color: 'green', background: 'black'}}>{title}</h1>
        <h2 style={headingStyle}>Hello, World</h2>
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
