import React from 'react'
import Header from './components/Header'
import Button from './components/Button'
import GearList from './components/GearList'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Button>Add Item</Button>
      <GearList />
    </React.Fragment>
  )
}

export default App