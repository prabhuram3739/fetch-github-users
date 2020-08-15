import React from 'react';
import CardUI from './CardUI';

function Cards(allRepos) {
    console.log("Response from Cards page:", allRepos);
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-3">
                    <CardUI />
                </div>
                <div className="col-md-3">
                    <CardUI />
                </div>
                <div className="col-md-3">
                    <CardUI />
                </div>
                <div className="col-md-3">
                    <CardUI />
                </div>
            </div>
        </div>
    )
}

export default Cards
