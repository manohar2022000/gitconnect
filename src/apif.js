import React, { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';
function Apif() {
    const [item,setItem]=useState([]);
    useEffect(()=>
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
        setItem(res.data)
    })
.catch(err=>{
    console.log(err)
})
    )

    return (
        <div className="cardspot">
          
        {item.map(item=>(
          
          <a href=""><div className="card" >{item.id}.{item.title}</div></a>
          
        ))}
      
    </div>
    )
}

export default Apif;
