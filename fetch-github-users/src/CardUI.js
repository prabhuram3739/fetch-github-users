import React from 'react';

function CardUI() {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src="" alt="" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text-secondary">
                    test
                </p>
                <a href="#" className="btn btn-primary">Follow</a>
            </div>
        </div>  
    )
}

export default CardUI;
