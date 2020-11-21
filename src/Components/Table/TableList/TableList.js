import React from 'react'
import './TableList.css'

function TableList(props) {

  return (
    <div onClick={props.sendInfo} className={props.class} id={props.id}>
      <div className="TableList__paragraph one">{props.historyNumber}</div>
      <div className="TableList__paragraph two">{props.firstName} {props.lastName}</div>
      <div className="TableList__paragraph ">{props.patrName}</div>
    </div>
    )
}

export default TableList