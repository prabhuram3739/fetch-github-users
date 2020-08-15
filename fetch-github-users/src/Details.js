import React, { useEffect, useState } from 'react';
import "./Details.css";
import axios from 'axios';
import Cards from './Cards';

function Details() {
    let allRepos = "";
    useEffect(() => {
        //setAppState({ loading: true });
        const apiUrl = 'https://api.github.com/repos/facebook/react/forks';
        axios.get(apiUrl).then((repos) => {
          allRepos = repos.data;
          //console.log(allRepos);
          //setAppState({ loading: false, repos: allRepos });
          return allRepos;
        });
      }, []);
    return (
        <div className="displayPage">
            <Cards details={allRepos} />
        </div>
    )
}

export default Details;
