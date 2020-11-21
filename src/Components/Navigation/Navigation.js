import React from 'react'
import './Navigation.css'
import NavLink from '../NavLink/NavLink'

function Navigation(props) {

  return (
    <div className="Navigation">
      <div onClick={props.changeListTrue}>
      <NavLink 
        class={props.classPresent}
        name="ПРИСУТСТВУЮТ" 
        count={props.presentList.length}
      />
      </div>

      <div onClick={props.changeListFalse}>
      <NavLink 
        class={props.classQuiting}
        name="ВЫБЫВШИЕ" 
        count={props.quittingList.length}
      />
      </div>
    </div>
  )
}

export default Navigation