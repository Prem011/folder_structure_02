import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='w-full h-full mx-auto flex felx-grow overflow-auto px-10 '>
      <h1 className='text-2xl mt-10 flex-1'>Home component</h1>
      <div className='my-10 left-0 flex-end' >
        <img className='w-10 h-10 bg-zinc-300 rounded-full p-1 ' src="https://img.icons8.com/?size=100&id=It-ZG9A_I14S&format=png&color=000000" alt="" />
      </div>
    </div>
      <div className='w-full bg-red max-w-xs mx-auto border border-gray-300 flex justify-center items-center rounded-md p-5' >
          <img className='w-25 h-25 mx-auto' src="https://img.icons8.com/?size=100&id=BBFWDW8oNIiK&format=png&color=000000" alt="" />
          <h3 className='text-center' >Mac price : $990</h3>
          <div className='w-full h-[30%] flex items-center' >
            <button className='bg-zinc-400 mx-auto border border-zinc-400 rounded-md  px-5'>Add to card</button>
          </div>
      </div>
    </div>
  )
}

export default Home