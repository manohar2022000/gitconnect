import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
function Languages() {
  const [lans, setLans] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://ec2-13-127-228-126.ap-south-1.compute.amazonaws.com/Languages"
      )
      .then((res) => {
        console.log(res.data.data);
        setLans(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="languagespot">
        {lans.map((lang) => (
          <div className="ilan">
            <li>
              <a key={lang.id}>
                <Link to={"/languages/"+lang.language}>{lang.language}</Link>
              </a>
              <br />
            </li>
          </div>
        ))}
    </div>
  );
}

export default Languages;
