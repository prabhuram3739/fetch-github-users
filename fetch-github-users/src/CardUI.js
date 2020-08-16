import React from 'react';
import './CardUI.css';
import { followApiEndPoint } from './apiConfig';
//import followUsers from './followUsersHook';

function CardUI(user) {
    let allRepos = "";
    //let followUsersAPI = followApiEndPoint+user.user.owner.login;
    //allRepos = followUsers(user.user.owner.login);
    return (
        <div className="card text-center shadow roundedCards">
            <div className="overflow">
                <img className="imageAlign" src={user.user.owner.avatar_url} alt="user avatar" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{user.user.owner.login}</h4>
                <p className="card-text text-secondary">
                    {user.user.full_name}
                </p>
                {/*<button className="btn btn-primary" onClick={allRepos.data}>Follow</button>*/}
                <button className="btn btn-primary">Follow</button>
            </div>
        </div>  
    )
}

export default CardUI;
