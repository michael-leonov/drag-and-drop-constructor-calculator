import React from 'react'
import Display from './components/display'

function App(): JSX.Element {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex gap-x-14">
        <div className="gap-y-3">
          <Display />
        </div>
        <div className="">
          <div className="">Переключатель</div>
          <div>Холст</div>
        </div>
      </div>
    </div>
  )
}

export default App
