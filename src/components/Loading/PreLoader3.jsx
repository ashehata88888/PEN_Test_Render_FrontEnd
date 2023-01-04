/* eslint-disable */

import React, { Fragment, useEffect, useState } from "react";
import "./PreLoader3.css";
import hTabs from '../BLS/hTabs.module.css'
import { useNavigate } from "react-router-dom";

function PreLoader3() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 2000);
        });
    }, 3000);
  }, []);

  return (
    <Fragment>
         <div className={hTabs.saveLodaingContainer}>
      {!completed ? (
        <>
          {!loading ? (
            <div className="spinner">
              <span className="savingSpan">Saving...</span>
              <div className="half-spinner"></div>
            </div>
          ) : (
            <div className="completed">&#x2713;</div>
          )}
        </>
      ) : (
       
        <>
         {/* {navigate("/Home")} */}
       
          <h1 className={hTabs.savingMessage}>Activity Was Saved Successfully</h1>

        </>
      )}
      </div>
    </Fragment>
  );
}

export default PreLoader3;