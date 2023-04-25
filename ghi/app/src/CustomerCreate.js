import React, { useEffect, useState } from 'react';

function CustomerCreate(props) {
    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Add a Customer</h1>
            <form id="create-location-form">
                <div className="form-floating mb-3">
                <input placeholder="First Name..." required type="text" name="first_name" id="first_name" className="form-control"></input>
                <label htmlFor="first_name">First Name...</label>
                </div>
                <div className="form-floating mb-3">
                <input placeholder="Last Name..." required type="text" name="last_name" id="last_name" className="form-control"></input>
                <label htmlFor="last_name">Last Name...</label>
                </div>
                <div className="form-floating mb-3">
                <input placeholder="Address..." required type="text" name="address" id="address" className="form-control"></input>
                <label htmlFor="address">Address...</label>
                </div>
                <div className="form-floating mb-3">
                <input placeholder="Phone number..." required type="text" name="phone_number" id="phone_number" className="form-control"></input>
                <label htmlFor="phone_number">Phone number...</label>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default CustomerCreate;
