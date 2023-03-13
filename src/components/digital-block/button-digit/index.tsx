import React from 'react'
import Props from './inteface'

function ButtonDigit({ children, customStyle }: Props): JSX.Element {
  return (
    <button
      type="button"
      className={`border-button rounded-md py-4 px-7 ${customStyle}`}
    >
      {children}
    </button>
  )
}

export default ButtonDigit
