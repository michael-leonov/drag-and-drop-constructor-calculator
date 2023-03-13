import React from 'react'

function Display(): JSX.Element {
  return (
    <div className="w-60 h-16 p-1 rounded shadow-xl">
      <div className="rounded-md bg-[#F3F4F6] w-full h-full flex justify-end items-center px-2 py-1">
        <span className="text-4xl font-extrabold">0</span>
      </div>
    </div>
  )
}

export default Display
