import React, {useEffect, useState} from "react";

function ServiceHistory() {

    const [appointments, setAppointments] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8080/api/appointments/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setAppointments(data.appointments)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const [searchVin, setSearchVin] = useState("");
    const handleSearchVinChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchVin(value);
    }


    function filterVin() {
        setAppointments(appointments.filter((appointment) => appointment.vin.toLowerCase().includes(searchVin)))
    }

    // Update line 57 below to this and remove the onclick to auto update page without buttom submission.
    // {appointments.filter((appointment) => appointment.vin.toLowerCase().includes(searchVin)).map(appointment => {

    // Add another button with an onclick to call fetchData() again to display all appointment by resetting the state.

    return (
        <>
        <h1>Service Appointments</h1>
            <input onChange={(event) => handleSearchVinChange(event)} className="form-control" type="search" aria-label="Search" placeholder="Search by VIN"/>
            <button onClick={filterVin} className="btn btn-outline-success">Search</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Is VIP?</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {appointments.map(appointment => {
                    return (
                        <tr key={appointment.vin}>
                            <td>{appointment.vin}</td>
                            <td>VIP???</td>
                            <td>{appointment.customer}</td>
                            <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
                            <td>{new Date(appointment.date_time).toLocaleTimeString()}</td>
                            <td>{appointment.technician}</td>
                            <td>{appointment.reason}</td>
                            <td>{appointment.status}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}

export default ServiceHistory
