import React, { useEffect } from 'react';
import axios from 'axios';
import { fetchUsersApi } from './apiConfig';

const useUsers = () => {
    const [users, usersSet] = React.useState([]);
    let allRepos = "";
    //API Call to fetch the users
    React.useEffect(() => {
      async function fetchUsers() {
          //API URL
        const apiUrl = fetchUsersApi;
        axios.get(apiUrl).then((repos) => {
          allRepos = repos.data;
          //Set the response to the user state
          usersSet(allRepos);
          return allRepos;
        });
      }
      fetchUsers();
    }, []);
    return users;
  };

  export default useUsers;