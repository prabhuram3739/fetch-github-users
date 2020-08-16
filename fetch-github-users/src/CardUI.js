import React from 'react';
import './CardUI.css';
import { followApiEndPoint } from './apiConfig';

function CardUI(user) {
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
                <a href="#" className="btn btn-primary">Follow</a>
            </div>
        </div>  
    )
}

export default CardUI;
