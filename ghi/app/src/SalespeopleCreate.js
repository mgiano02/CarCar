import React, { useState, useEffect } from 'react';

function SalespeopleCreate(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [status, setStatus] = useState('');

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value)
    }
    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value)
    }
    const handleEmployeeIdChange = (event) => {
        const value = event.target.value;
        setEmployeeId(value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data={};
        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_id = employeeId;

        const salespersonUrl = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(salespersonUrl, fetchConfig);
        if (response.ok) {
            setFirstName('');
            setLastName('');
            setEmployeeId('');
            setStatus('success')
        } else {
            setStatus('error')
        }
    };
    function isStatus() {
        if (status === 'success') {
            return (
                <p className="alert alert-success">Salesperson successfully created</p>
            )
        } else if (status === 'error') {
            return (
                <p className="alert alert-danger">Can't create salesperson</p>
            )
        }
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Add a Salesperson</h1>
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
                <input onChange={handleEmployeeIdChange} placeholder="Employee ID..." required type="employee_id" name="employee_id" id="employee_id" className="form-control" value={employeeId}></input>
                <label htmlFor="employee_id">Employee ID...</label>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>


    );
}

export default SalespeopleCreate;
