import React from 'react'
import './Table.css'
import TableList from './TableList/TableList'
import TableNav from './TableNav/TableNav'
import './Table.css'

function Table(props) {

  const items = props.items;
  const listItems = items.map((item, index) =>
    <React.Fragment key={index}>
    <TableList
      id={index}
      class={props.selectedId === String(index) ? 'TableList active' : 'TableList' }
      sendInfo={props.sendInfo}
      historyNumber={item.historyNumber}
      firstName={item.firstName}
      lastName={item.lastName}
      patrName={item.patrName}
    />
    </React.Fragment>
  )

  return (
    <div className="Table">
      <TableNav/>
      {listItems}
    </div>
  )
}

export default Table