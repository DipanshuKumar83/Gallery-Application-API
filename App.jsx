import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

const[userData , setUserData]=useState([]);  

const getdata =  async () =>{
  const Response =  await axios.get('https://picsum.photos/v2/list?page=2&limit=19')
  // console.log(Response);
  
  setUserData(Response.data)
  console.log(Response.data);  
}

let printUserData = 'No User Available';

if (userData.length > 0) {
  printUserData = userData.map((elem, idx) => (
    <div className='overflow-hidden' key={elem.id || idx}>
      <img className='h-25' src={elem.download_url} alt={elem.author} />
      <h4 className='text-white font-bold'>{elem.author}</h4>
    </div>
  ));
}

return (
    
    <div className='bg-black h-screen p-4 text-white '>
      <button onClick={getdata}
      className='bg-green-400 mb-3 text-shadow-white active:scale-95 rounded-3xl px-3 py-4'> Get Data </button>
      <div className='flex flex-wrap h-screen gap-2'>{printUserData}</div>
    </div>
    
  )
}

export default App
App