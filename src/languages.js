import React, { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';
import {Link } from "react-router-dom";
function Languages() {
    const [lans,setLans]=useState([]);
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
          {lans.map(lang=>(<div className="ilan"><li><a key={lang.id}><Link to={'http://ec2-13-127-228-126.ap-south-1.compute.amazonaws.com/posts/languages/'+lang.language+'?page=2&limit=1&dateFrom=2000-06-03T17:18:19.907Z'}>{lang.language}</Link></a><br /></li></div>)
          )
}
    </div>
    )
    
}

export default Languages;
