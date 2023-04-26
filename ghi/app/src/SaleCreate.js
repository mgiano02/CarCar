import React, {useState, useEffect} from 'react';

function SaleCreate(props) {
    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Record a new sale</h1>
            <form id="create-location-form">
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default SaleCreate;
