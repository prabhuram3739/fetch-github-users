import React from 'react';
import CardUI from './CardUI';
import './Cards.css';

function Cards({details}) {
    console.log("Response from Cards page:", details);
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
            {/* Displaying the cards from the CardsUI component with the users data response */}
            {details.map((user) => (
                <div key={user.id} className="marginTopAlign col-md-3">
                    <CardUI user={user} />
                </div>
            ))}
            </div>

        </div>
    )
}

export default Cards
