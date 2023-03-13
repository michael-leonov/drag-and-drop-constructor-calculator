import React from 'react'
import Props from './interface'

function OperationButton({ children }: Props): JSX.Element {
  return (
    <button type="button" className="py-4 px-6 border-button rounded-md">
      {children}
    </button>
  )
}

export default OperationButton
