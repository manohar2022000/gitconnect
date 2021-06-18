import React, { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';
import Modal from 'react-modal';
import Signup from './register';

function Apif() {
//     const [items,setItems]=useState([]);
//     useEffect(()=>
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(res=>{
//         setItems(res.data)
//     })
// .catch(err=>{
//     console.log(err)
// })
//     )

//     return (
//         <div className="cardspot">
          
//         {items.map(item=>(
          
//           <a href="https://www.npmjs.com/package/axios"><div className="card" >{item.id}.{item.title}</div></a>
          
//         ))}
      
//     </div>
//     )

const [open,setOpen]=useState(true);

return(
    <div ClassName="modal">
        <button onClick={()=>setOpen(true)}>open modal</button>
<Modal isOpen={open}>
    <Signup/>
    <button onClick={()=>setOpen(false)}>close</button>
</Modal>

    </div>

)

}

export default Apif;
