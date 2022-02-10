import React from 'react'

import './Button.scss'

function Button(props) {
  return (
    <button
      className={`button ${props.className}`}
      onClick={props.onClick}
      type={props.type || 'button'}
    >
      {props.children}
    </button>
  )
}

export default Button
