import React, { useEffect,useState } from 'react';
import '../App.css';
import axios from 'axios';
function Post(props) {
    const [psts,setPsts]=useState([]);
    useEffect(()=>{
    axios.get(props.link)
    .then(res=>{
        console.log(res.data.data.posts)
        setPsts(res.data.data.posts)

    })
.catch(err=>{
    console.log(err);
})
},[]
    );
    return (
        <div className="languagepot">
          {psts.map(pst=>(<div className="ipost"><li key={pst.id}>{
pst.language.language}<br/>{pst.content}</li></div>)
          )
}
    </div>
    )
    
}

export default Post;
