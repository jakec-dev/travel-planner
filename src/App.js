import React, { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import GearList from './components/GearList'

const App = () => {
  const [ gear, setGear ] = useState([])
  const [ item, setItem ] = useState('')
  return (
    <React.Fragment>
      <Header />
      <div>
        <input onChange={(e) => setItem(e.target.value)} />
        <Button onClick={() => setGear([...gear, { id: gear.length, name: item }])}>
          + Add Item
        </Button>
      </div>
      <GearList gear={gear} />
    </React.Fragment>
  )
}

export default App