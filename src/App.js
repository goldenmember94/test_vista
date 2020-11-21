import React, { useState, useEffect } from 'react'
import './App.css';
import Information from './Containers/Information/Information';
import List from './Containers/List/List';

function App() {
  const [presentList, setPresentList] = useState([])
  const [quittingList, setQuittingList] = useState([])
  const [renderList, setRenderList] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [selectedId, setSelectedId] = useState('')
  const [presentListButton, setPresentListButton] = useState(false)
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.jsonbin.io/b/5fb7b2da02f80c2af52368e2');
      const quittingList = await response.json()
      
      setQuittingList(() => {
        return quittingList
      })
    }
    fetchData();
  }, [])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.jsonbin.io/b/5fb7b284a825731fc0a04c7f');
      const presentList = await response.json()
      
      setPresentList(() => {
        return presentList
      })
      setRenderList(() => {
        return presentList
      })
    }
    fetchData();
  }, [])
  
  const changeListTrue = () => {
    if (presentListButton === true) {
      setRenderList(() => {
        return presentList
      })
      setPresentListButton(() => {
        return false
      })
      setSelectedId('')
    }
  }

  const changeListFalse = () => {
    if (presentListButton === false) {
      setRenderList(() => {
        return quittingList
      })
      setPresentListButton(() => {
        return true
      })
      setSelectedId('')
    }
  }

  const sendInfo = (e) => {
    const el = e.target.parentElement.id
    const elem = renderList[el]

    setSelectedId(el)
    setSelectedItem(elem)
  }

  const getCurrentAge = (date) => {
    if (date) {
      return new Date().getFullYear() - date.split('-')[0];
    } else {
      return null
    }
  };
    
  return (
    <div className="App">
      <Information
        name={selectedItem.firstName}
        lastName={selectedItem.lastName}
        diagnosis={selectedItem.diagnosis}
        birthDate={getCurrentAge(selectedItem.birthDate)}
      />
      <List 
        sendInfo={sendInfo}
        selectedId={selectedId}
        items={renderList}
        presentList={presentList}
        quittingList={quittingList}
        changeListTrue={changeListTrue}
        changeListFalse={changeListFalse}
        classPresent={presentListButton ? "NavLink" : "NavLink active"}
        classQuiting={presentListButton ? "NavLink active" : "NavLink"}
      />
    </div>
  );
}

export default App;
