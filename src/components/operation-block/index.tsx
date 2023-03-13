import React from 'react'
import OperationButton from './operation-button'

function OperationBlock(): JSX.Element {
  return (
    <div className="flex gap-x-2 wrapper">
      <OperationButton>/</OperationButton>
      <OperationButton>х</OperationButton>
      <OperationButton>-</OperationButton>
      <OperationButton>+</OperationButton>
    </div>
  )
}

export default OperationBlock
