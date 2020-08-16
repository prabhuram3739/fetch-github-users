import React, { useEffect } from 'react';
import axios from 'axios';
import { followApiEndPoint } from './apiConfig';

/*const useFollowUsers = (username) => {
    const [follow, usersSet] = React.useState([]);
    let allRepos = "";
    //API Call to fetch the users
    React.useEffect(() => {
      async function followUsers() {
          //API URL
        const apiUrl = followApiEndPoint+username;
        axios.get(apiUrl).then((repos) => {
          allRepos = repos.data;
          console.log(allRepos);
          //Set the response to the user state
          usersSet(allRepos);
          return allRepos;
        });
      }
      followUsers();
    }, []);
    return follow;
  };

  export default useFollowUsers;*/