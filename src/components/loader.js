import React, { useState, useEffect, useCallback } from 'react';
import App from "./App.js";
import ReactDOM from 'react-dom';

function Loader (){
  let timer=undefined;
  const [ spinner, setSpinner ] = useState(false)

  function render(){
    return(ReactDOM.render(<App city={city}/>, document.getElementById('root')),
    setSpinner(true),
     clearTimeout(timer)
    )
  }
  
  useEffect(() => {
     timer =setTimeout(() => (render()),3000);   
  }, []);
  
  
  return(
    !spinner &&
    <div>
    <div id="spinner" className="container" >
    <div className="loading"></div>
    <h1>Loading...</h1></div>}
    </div>
  )

} 


export default Loader;