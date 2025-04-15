import React from 'react'
import Lottie from 'lottie-react'
import Join from '../../join.json'
import Register from '../../register.json'
function JoinDoc() {
  return (
    <div>
      <div className='max-w-5xl flex flex-col lg:flex-row justify-between items-center gap-10 mx-auto h-fit sm:h-screen px-4'>
        <div className='flex flex-col justify-between items-center gap-8 text-center lg:text-left'>
          <h2 className='text-3xl sm:text-4xl lg:text-6xl capitalize leading-tight text-white'>
            join <br /> the <span className='text-primary'>DOC.AI</span> <br /> competition now!
          </h2>
        </div>
        <div className='w-full sm:w-3/4 lg:w-2/4 mt-[-10px] lg:mt-[-20px]'>
          <Lottie animationData={Register}></Lottie>
        </div>
      </div>
    </div>
  )
}

export default JoinDoc
