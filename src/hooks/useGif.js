import React, { useEffect, useState } from 'react'
import axios from "axios";

const apikey='CgDLckJSA2a53C8FyjQtQoJ0imP3HMz7';
// REACT_APP_GIPHY_API_KEY='CgDLckJSA2a53C8FyjQtQoJ0imP3HMz7'
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`;

function useGif() {
 const[loading,setloading]=useState(false);
 const[gif,setgif]=useState('');

 async function fetchData(tag){
    setloading(true);
      const {data}=await axios.get(tag ? `${url}&tag=${tag}`  : url);
      console.log(data);
      const imageUrl=data.data.images.downsized_large.url;
      
      setgif(imageUrl);
      console.log(imageUrl);
      setloading(false);
 }
 useEffect(()=>{
    fetchData('Jujutsu Kaisen');
 },[]);

 return {gif,loading, fetchData};
}

export default useGif;