import React from 'react';
import './Login.css';
import { authGitUrl } from './apiConfig';

function Login() {
    return ( 
        <div className = 'login'> 
            <a href = { authGitUrl } > LOGIN WITH GitHub </a>  
            <img src = "https://www.ateamindia.com/wp-content/uploads/2019/03/maxresdefault.jpg" alt = "" / >
        </div>
    );
}

export default Login;