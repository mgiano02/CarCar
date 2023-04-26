import React, { useEffect, useState } from "react";

function TechnicianCreate() {

    const fetchData = async () => {
        const url = "http://localhost:8080/api/technicians/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data.technicians);

        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const [firstName, setFirstName] = useState("");
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_id = employeeId;
        console.log(data)

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
            console.log(newTechnician);

            setFirstName("");
            setLastName("");
            setEmployeeId("");
        }
    }



    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Add a Technician</h1>
            <form onSubmit={handleSubmit} id="create-location-form">
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
                <label htmlFor="address">Employee ID</label>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>
    )
}
 export default TechnicianCreate
