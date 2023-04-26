import React, { useState, useEffect } from 'react';

function SalespeopleCreate(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [employeeId, setEmployeeId] = useState('');

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
            const newSalesperson = await response.json();
            console.log(newSalesperson);
            setFirstName('');
            setLastName('');
            setEmployeeId('');
            console.log(employeeId)
        };
    };

    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Add a Salesperson</h1>
            <form onSubmit={handleSubmit} id="create-location-form">
                <div className="form-floating mb-3">
                <input onChange={handleFirstNameChange} placeholder="First Name..." required type="text" name="first_name" id="first_name" className="form-control"></input>
                <label htmlFor="first_name">First Name...</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={handleLastNameChange} placeholder="Last Name..." required type="text" name="last_name" id="last_name" className="form-control"></input>
                <label htmlFor="last_name">Last Name...</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={handleEmployeeIdChange} placeholder="Employee ID..." required type="employee_id" name="employee_id" id="employee_id" className="form-control"></input>
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
