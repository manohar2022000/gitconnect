import React, { useState } from 'react';
import Signup from './register';
import Modal from 'react-modal';
import Login from './login';
import './App.css';
import { Link } from "react-router-dom";

function SignupModal(){
const [open,setOpen]=useState(true);

return(
    <div ClassName="modal">
<Modal isOpen={open}>
<button className="cancel" onClick={()=>setOpen(false)} ><Link to="/">X</Link></button>
    <Signup/>
  
</Modal>

    </div>
)
}
;

function LoginModal(){
    const [lopen,setLopen]=useState(true);
    
    return(
        <div ClassName="modal">
    <Modal isOpen={lopen}>
    <button className="cancel" onClick={()=>setLopen(false)} ><Link to="/">X</Link></button>
        <Login/>
      
    </Modal>
    
        </div>
    )
    }
    ;
export  {SignupModal,LoginModal};
