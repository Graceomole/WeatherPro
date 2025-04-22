import React from 'react'
import loadingGif from './../assets/images/la.gif';

const PageLoader = () => {
  return (
    <div className='flex justify-center w-full h-[100vh] items-center '>
        <img src={loadingGif} alt="" />
    </div>
  )
}

export default PageLoader