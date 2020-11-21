import React from 'react'
import './NavLink.css'

function NavLink(props) {
  return (
  <div className={props.class}>
    {props.name}({props.count})
  </div>
  )
}

export default NavLink