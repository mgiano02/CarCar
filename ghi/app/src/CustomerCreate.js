import React, { useState } from 'react';

function CustomerCreate(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [status, setStatus] = useState('');

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value)
    }
    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value)
    }
    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value)
    }
    const handlePhonenumberChange = (event) => {
        const value = event.target.value;
        setPhonenumber(value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.first_name = firstName;
        data.last_name = lastName;
        data.address = address;
        data.phone_number = phonenumber;

        const customerUrl = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(customerUrl, fetchConfig);
        if (response.ok) {
            setFirstName('');
            setLastName('');
            setAddress('');
            setPhonenumber('');
            setStatus('success');
        } else {
            setStatus('error');
        };
    };
    function isStatus() {
        if (status === 'success') {
            return (
                <p className="alert alert-success">Customer successfully created</p>
            )
        } else if (status === 'error') {
            return (
                <p className="alert alert-danger">Can't create Customer</p>
            )
        }
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Add a Customer</h1>
            {isStatus()}
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                <input onChange={handleFirstNameChange} placeholder="First Name..." required type="text" name="first_name" id="first_name" className="form-control" value={firstName}></input>
                <label htmlFor="first_name">First Name...</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={handleLastNameChange} placeholder="Last Name..." required type="text" name="last_name" id="last_name" className="form-control" value={lastName}></input>
                <label htmlFor="last_name">Last Name...</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={handleAddressChange}placeholder="Address..." required type="text" name="address" id="address" className="form-control" value={address}></input>
                <label htmlFor="address">Address...</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={handlePhonenumberChange}placeholder="Phone number..." required type="text" name="phone_number" id="phone_number" className="form-control" value={phonenumber}></input>
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
