import React from 'react'

const GearList = (props) => {
  const { gear } = props
  return gear.length > 0 ? (
    <table>
      <tr>
        <th>Item Name</th>
      </tr>
      {gear.map(({id, name}) => (
        <tr key={id}>
          {name}
        </tr>
      ))}
    </table>
  ) : null
}

export default GearList