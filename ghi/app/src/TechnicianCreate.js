import React, { useEffect, useState } from "react";

function TechnicianCreate() {

    const [firstName, setFirstName] = useState("");
    const [status, setStatus] = useState("");
    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
    }
    const [lastName, setLastName] = useState("");
    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
    }
    const [employeeId, setEmployeeId] = useState("");
    const handleEmployeeIdChange = (event) => {
        const value = event.target.value;
        setEmployeeId(value);
    }
    // Submits technician form
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_id = employeeId;

        const technicianUrl = "http://localhost:8080/api/technicians/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            header: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
            const newTechnician = await response.json();

            setFirstName("");
            setLastName("");
            setEmployeeId("");
            setStatus("success");
        } else {
            setStatus("error")
        }
    }
    // Displays message based on if appointment was successfully created or not
    function isStatus() {
        if (status === 'success') {
            return (
                <p className="alert alert-success">Technician successfully created</p>
            )
        } else if (status === 'error') {
            return (
                <p className="alert alert-danger">Can't create Technician</p>
            )
        }
    }



    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Add a Technician</h1>
            {isStatus()}
            <form onSubmit={handleSubmit} id="create-technician-form">
                <div className="form-floating mb-3">
                <input onChange={handleFirstNameChange} placeholder="First Name" required value={firstName} type="text" name="first_name" id="first_name" className="form-control"></input>
                <label htmlFor="first_name">First Name</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={handleLastNameChange} placeholder="Last Name" required value={lastName} type="text" name="last_name" id="last_name" className="form-control"></input>
                <label htmlFor="last_name">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={handleEmployeeIdChange} placeholder="Employee ID" required value={employeeId} type="number" name="employee_id" id="employee_id" className="form-control"></input>
                <label htmlFor="employee_id">Employee ID</label>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>
    )
}
 export default TechnicianCreate
