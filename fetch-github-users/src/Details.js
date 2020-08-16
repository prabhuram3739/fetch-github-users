import React from 'react';
import "./Details.css";
import Cards from './Cards';
import useUsers from './usersHook';

function Details() {
    let allRepos = "";
    allRepos = useUsers();
    return (
        <div className="displayPage">
        <h4 className="blackHeading">Git Repo Users for Facebook React</h4>
            <Cards details={allRepos} />
        </div>
    )
}

export default Details;
