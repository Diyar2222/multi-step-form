import React from 'react'

const Header = ({title,description}) => {
  return (
    <header>
        <h3>{title}</h3>
        <p>{description}</p>
    </header>
  )
}

export default Header