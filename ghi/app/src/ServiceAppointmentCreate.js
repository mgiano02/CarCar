import React from "react";

function ServiceAppointmentCreate() {
    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Add a Technician</h1>
            <form id="create-location-form">
                <div className="form-floating mb-3">
                <input placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control"></input>
                <label htmlFor="first_name">First Name</label>
                </div>
                <div className="form-floating mb-3">
                <input placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control"></input>
                <label htmlFor="last_name">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                <input placeholder="Employee ID" required type="number" name="employee_id" id="employee_id" className="form-control"></input>
                <label htmlFor="address">Employee ID</label>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default ServiceAppointmentCreate
