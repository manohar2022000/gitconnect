import React, { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';
function Languages() {
    const [lans,setLans]=useState([]);
    const[presslink,setPresslink]=useState('');
    useEffect(()=>{
    axios.get('http://ec2-13-127-228-126.ap-south-1.compute.amazonaws.com/Languages')
    .then(res=>{
        console.log(res.data.data)
        setLans(res.data.data)

    })
.catch(err=>{
    console.log(err)
})
},[]
    )

    return (
        <div className="languagespot">
          {lans.map(lang=>(<div className="ilan"><li><a key={lang.id} onclick={()=>setPresslink=lang.language}>{lang.language}</a><br /></li></div>)
          )
}
    </div>
    )
    
}

export default Languages;
