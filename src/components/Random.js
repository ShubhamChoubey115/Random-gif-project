import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // const [gif,setGif] = useState('');
  // const [loading,setLoading] = useState(false);
  
  // async function fetchData(){
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false);
  // }


  // useEffect(()=>{
  //   fetchData();
  // },[])
  const {gif,loading, fetchData} = useGif();

  function clickHandler(){
    fetchData();
  }

  return (
    <div className='w-1/2 flex flex-col items-center gap-y-5 mt-[15px] bg-green-500 rounded-lg border border-green-950'>
      <h1 className='text-2xl mt-[15px] uppercase font-bold text-green-950'>Random Gif</h1>
      
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" />)
      }
      

      <button onClick={clickHandler} className='w-9/12 mb-[18px] bg-yellow-100 
      text-lg rounded-lg py-2'>
        Generate
      </button>
    </div>
  )
}

export default Random