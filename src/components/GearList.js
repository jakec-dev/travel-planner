import React from 'react'

const items = [
  { 
    id: 1, 
    name: "test item" 
  },
  { 
    id: 2, 
    name: "test item 2" 
  },
  { 
    id: 3, 
    name: "test item 3" 
  },
]

const GearList = () => {
  return (
    <table>
      <tr>
        <th>Item</th>
      </tr>
      {items.map(({id, name}) => (
        <tr key={id}>
          {name}
        </tr>
      ))}
    </table>
  )
}

export default GearList