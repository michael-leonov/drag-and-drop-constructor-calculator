import React from 'react'
import ButtonDigit from './button-digit'

function DigitalBlock(): JSX.Element {
  return (
    <div className="wrapper grid grid-cols-3 gap-2">
      {Array.from({ length: 9 }, (_v, k) => (
        <ButtonDigit key={k}>{k + 1}</ButtonDigit>
      ))}
      <ButtonDigit customStyle="col-span-2">0</ButtonDigit>
      <ButtonDigit>,</ButtonDigit>
    </div>
  )
}

export default DigitalBlock
