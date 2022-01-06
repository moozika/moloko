import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className='w-screen h-screen bg-slate-900 flex justify-center items-center'>
      <FadeLoader
        color={'#ddd6fe'}
      />
    </div>
  )
}

export default Loader;