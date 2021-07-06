import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

let homeLink='http://ec2-13-127-228-126.ap-south-1.compute.amazonaws.com/posts';


function Post(props) {
  const [psts, setPsts] = useState([]);
      const path=window.location.pathname;
      const postLink = homeLink + path;
      console.log(path);
      console.log('hello component', props, postLink)
  useEffect(() => {
      console.log('hello')
    axios
      .get(props.for === "language" ? postLink:homeLink   )
      .then((res) => {
        console.log(res.data.data.posts);
        setPsts(res.data.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  },[props.for==='home'||0]);
  return (
    <div className="languagepot">
      {psts.map((pst) => (
        <div className="ipost">
          <li key={pst.id}>
            {pst.language.language}
            <br />
            {pst.content}
          </li>
        </div>
      ))}
    </div>
  );
}

export default Post;
