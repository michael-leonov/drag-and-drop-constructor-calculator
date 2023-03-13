import React from 'react'

function EqualButton(): JSX.Element {
  return (
    <div className="wrapper">
      <button
        type="button"
        className="rounded-md w-full py-6 bg-sendsay-violet text-white"
      >
        =
      </button>
    </div>
  )
}

export default EqualButton
