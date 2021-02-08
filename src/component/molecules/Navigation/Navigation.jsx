import React from 'react'

const Link = ({ onClick, id, title }) =>{
  // title => Title
  return (
    <button id={id} onClick={onClick}>{title}</button>
  )
}

const Navigation = ({ links, handleScrollToEl }) => {
  return (
    <div style={{position: 'fixed'}}>
      {links.map(link => <Link id={link} key={link} onClick={handleScrollToEl} title={link} />)}
    </div>
  )
}

export default Navigation
