import React from 'react'

const Url_part = ({ setInputData }) => {
  const handleInput = (e) => {
    setInputData(e.target.value)
  }

  return (
    <div className='flex justify-center  gap-2   px-2'>
      <div class="form">
        <input type="text" className='w-full' name="text" autocomplete="off" required onChange={(e)=>{handleInput(e)}}/>
        <label for="text" class="label-name">
          <span class="content-name">
            Your URL
          </span>
        </label>
      </div>

      {/* <h1 className='text-gray-400 w-32 font-bold text-lg justify-center items-center'>URL Here:</h1>
        <input className='w-full  py-1 border-e-teal-100 outline-none rounded-sm' type="url" onChange={(e)=> handleInput(e) } /> */}
    </div>
  )
}

export default Url_part