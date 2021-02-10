import React from 'react'

const NavItem = ({ onClick, id, title }) => {
  const linkName = title.charAt(0).toUpperCase() + title.slice(1)
  return (
    <li id={id} onClick={onClick}>{linkName}</li>
  )
}

export default NavItem