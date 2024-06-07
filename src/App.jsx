import React, { useState } from 'react'
import Heading from './components/Heading'
import './index.css'
import Url_part from './components/Url_part'
import QR_code from './components/QR_code'

const App = () => {
  const [inputData, setInputData] = useState('')

  return (
    <div className='h-screen w-full flex p-3  justify-center items-center bg-cover' style={{backgroundImage:"url(/bg_img.jpg)"}}>
      <div className=' h-[400px] w-[410px] background gap-1 flex flex-col   rounded-md border-2 shadow-2xl'>
      <Heading />
      <Url_part setInputData={setInputData} />
      <QR_code value={inputData}  />

      </div>


    </div>
  )
}

export default App