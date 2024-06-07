import QRCode from 'qrcode.react'
import React from 'react'

const QR_code = ({value}) => {
  return (
    <div className='flex justify-center items-center h-72 w-full '> 
   <QRCode  className='!h-[180px] !w-[180px]' value={value}/>   </div>
  )
}

export default QR_code