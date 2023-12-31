import React, {useEffect, useState} from "react";

function ServiceAppointmentCreate() {

    const [technicians, setTechnicians] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [status, setStatus] = useState("");


    const [vin, setVin] = useState("");
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }
    const [customer, setCustomer] = useState("");
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }
    const [date, setDate] = useState("");
    const handleDateChange = (event) => {
        const value = event.target.value;
        setDate(value);
    }
    const [technician, setTechnician] = useState("");
    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value);
    }
    const [reason, setReason] = useState("");
    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value);
    }
    // Get technician data and set state based on data
    const fetchData = async () => {
        const url = "http://localhost:8080/api/technicians/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json()
            setTechnicians(data.technicians)
        }
    }
    // Get customer data and set state based on data
    const fetchCustomerData = async () => {
        const url = "http://localhost:8090/api/customers/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json()
            setCustomers(data.customers)
        }
    }

    useEffect(() => {
        fetchData();
        fetchCustomerData();
    }, []);

    // Submits appointment form
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.vin = vin;
        data.customer = customer;
        data.date_time = date;
        data.status = "PENDING";
        data.technician = technician;
        data.reason = reason;

        const appointmentUrl = "http://localhost:8080/api/appointments/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            setVin("");
            setCustomer("");
            setDate("");
            // setTime("");
            setTechnician("");
            setReason("");
            setStatus("success");
        } else {
            setStatus("error")
        }
    }
    // Displays message based on if appointment was successfully created or not
    function isStatus() {
        if (status === 'success') {
            return (
                <p className="alert alert-success">Service appointment successfully created</p>
            )
        } else if (status === 'error') {
            return (
                <p className="alert alert-danger">Can't create service appointment</p>
            )
        }
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Add an appointment</h1>
            {isStatus()}
            <form onSubmit={handleSubmit} id="create-appointment-form">
                <div className="form-floating mb-3">
                <input onChange={handleVinChange} placeholder="Automobile VIN" required value={vin} type="text" name="vin" id="vin" className="form-control"></input>
                <label htmlFor="vin">Automobile VIN</label>
                </div>
                <div className="mb-3">
                <select onChange={handleCustomerChange} placeholder="Customer" required value={customer} name="customer" id="customer" className="form-select">
                    <option htmlFor="customer">Customer</option>
                    {customers.map(customer => {
                            return (
                                <option key={customer.id} value={customer.first_name + " " + customer.last_name}>
                                    {customer.first_name} {customer.last_name}
                                </option>
                            )
                        })}
                </select>
                </div>
                <div className="form-floating mb-3">
                <input onChange={handleDateChange} placeholder="Date" required value={date} type="datetime-local" name="date" id="date" className="form-control"></input>
                <label htmlFor="date">Date</label>
                </div>
                {/* <div className="form-floating mb-3">
                <input onChange={handleTimeChange} placeholder="Time" required value={time} type="time" name="time" id="time" className="form-control"></input>
                <label htmlFor="time">Time</label>
                </div> */}
                <div className="mb-3">
                <select onChange={handleTechnicianChange} required value={technician} name="technician" id="technician" className="form-select">
                    <option value="">Choose a Technician</option>
                        {technicians.map(technician => {
                            return (
                                <option key={technician.employee_id} value={technician.first_name}>
                                    {technician.first_name}
                                </option>
                            )
                        })}
                </select>
                </div>
                <div className="form-floating mb-3">
                <input onChange={handleReasonChange} placeholder="Reason" required value={reason} type="text" name="reason" id="reason" className="form-control"></input>
                <label htmlFor="reason">Reason</label>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default ServiceAppointmentCreate
