import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import Table from '../../Components/Table/Table'
import './List.css'

function List(props) {

  return (
    <div className="List">
      <Navigation
        presentList={props.presentList}
        quittingList={props.quittingList}
        changeListTrue={props.changeListTrue}
        changeListFalse={props.changeListFalse}
        classPresent={props.classPresent}
        classQuiting={props.classQuiting}
      />
      <Table 
        sendInfo={props.sendInfo}
        selectedId={props.selectedId}
        items={props.items}
      />
    </div>
  )
}

export default List