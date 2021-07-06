import React, { useEffect,useState } from 'react';
import '../App.css';
import axios from 'axios';
function Profile() {
    const [psts,setPsts]=useState([]);
    useEffect(()=>{
    axios.get('http://ec2-13-127-228-126.ap-south-1.compute.amazonaws.com/posts')
    .then(res=>{
        console.log(res.data)
        setPsts(res.data)

    })
.catch(err=>{
    console.log(err);
})
},[]
    );
    return (
        <div className="languagepot">
          {/* {psts.map(pst=>(<div className="ipost"><li key={pst.id}>{
pst.language.language}<br/>{pst.content}</li></div>)
          )
} */}p
    </div>
    )
    
}

export default Profile;
