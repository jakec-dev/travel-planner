import React from 'react'

const Button = props => {
  const {children, ...otherProps} = props
  return (
    <button {...otherProps}>{children}</button>
  )
}

export default Button