import React from 'react'

function App(): JSX.Element {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-[539px] flex gap-x-14">
        <div>Сайдбар</div>
        <div className="">
          <div className="">Переключатель</div>
          <div>Холст</div>
        </div>
      </div>
    </div>
  )
}

export default App
