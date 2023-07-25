import React, { useState } from 'react'
import Spinner from './Spinner'
import useGif from '../hooks/useGif';

const Tag = () => {
  const [tag,setTag] = useState('pokemon');

  const {gif,loading, fetchData} = useGif(tag);

  function clickHandler(){
    fetchData(tag);
  }

  function changeHandler(event){
    setTag(event.target.value);
  }

  return (
    <div className='w-1/2 flex flex-col items-center gap-y-5 mt-[15px] bg-blue-500 rounded-lg border border-black'>
      <h1 className='text-2xl mt-[15px] uppercase font-bold text-green-950'>Random {tag} Gif</h1>
      
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" />)
      }
      
      <input className='w-9/12  mb-[-6px] text-center
      text-lg rounded-lg py-2'
        onChange={changeHandler}
        value={tag}
      />
      <button onClick={clickHandler} className='w-9/12 mb-[18px] bg-yellow-100 
      text-lg rounded-lg py-2'>
        Generate
      </button>
    </div>
  )
  
}

export default Tag