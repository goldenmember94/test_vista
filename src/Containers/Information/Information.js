import React from 'react'
import './Information.css'

function Information(props) {

  return (
  <div className="Information">
    <div className="Information__nav">
      <div>
        Информация о пациенте
      </div>
      <div>
        ᐊ
      </div>
    </div>
    <div className="Information__list">
      <div className="Information__options">
        <span className="bold">ФИО</span> {props.name} {props.lastName}
      </div>
      <div className="Information__options">
      <span className="bold">Возраст</span> {props.birthDate}
      </div>
      <div className="Information__options">
      <span className="bold">Диагноз</span> {props.diagnosis}
      </div>
    </div>
  </div>
  )
}

export default Information