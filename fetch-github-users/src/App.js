import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Details from "./Details";
import { getTokenFromUrl } from "./apiConfig";
import { useDataLayerValue } from "./DataLayer";

function App() {
//Pass the functions to the datalayer and pull the details
const [{ user, token }, dispatch] = useDataLayerValue();
      //Run code based on a given condition
      useEffect(() => {
        const hash = getTokenFromUrl();
        //Strip the hash from the url to not show
        if (window.location.href.includes('?')) { 
          window.history.pushState({}, null, window.location.href.split('?')[0]); 
      }
        const _token = hash.code;
        if (_token) {
          dispatch({
            type: "SET_TOKEN",
            token: _token
        });
        }
    }, []);
  return (
    <div className="App">
    { token ? ( <Details /> ) : ( <Login /> ) }
    </div>
  );
}

export default App;
