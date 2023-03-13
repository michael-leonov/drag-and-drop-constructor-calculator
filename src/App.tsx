import React from 'react'
import Display from './components/display'
import OperationBlock from './components/operation-block'
import DigitalBlock from './components/digital-block'
import EqualButton from './components/equal-button'
import Switcher from './components/switcher'
import Canvas from './components/canvas'

function App(): JSX.Element {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex gap-x-14">
        <div className="flex flex-col gap-y-3 pt-16">
          <Display />
          <OperationBlock />
          <DigitalBlock />
          <EqualButton />
        </div>
        <div className="flex flex-col gap-y-[30px]">
          <Switcher />
          <Canvas />
        </div>
      </div>
    </div>
  )
}

export default App
