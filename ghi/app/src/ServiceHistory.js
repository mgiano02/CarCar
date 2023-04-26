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

    return (
        <>
        <h1>Service Appointments</h1>
        <form>
            <input className="form-control" type="search" placeholder="Search by VIN"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
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
                        <td>{appointment.date_time}</td>
                        <td>{appointment.time}</td>
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
