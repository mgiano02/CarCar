import React, {useEffect, useState} from "react";

function ServiceAppointmentList() {

    const [appointments, setAppointments] = useState([]);
    const [automobiles, setAutomobiles] = useState([]);
    const [status, setStatus] = useState("PENDING");

    // Get appointment data and set/filter state based on data
    const fetchAppointmentData = async () => {
        const url = "http://localhost:8080/api/appointments/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json()
            setAppointments(data.appointments.filter((appointment) => appointment.status === "PENDING"));
        }
    }

    // Get automobile data and set state based on data
    const fetchAutomobileData = async () => {
        const url = "http://localhost:8100/api/automobiles/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();

            setAutomobiles(data.autos);
        }
    }

    useEffect(() => {
        fetchAppointmentData();
        fetchAutomobileData();
    }, []);

    // Update status to "CANCEL"
    const handleCancel = async (id) => {

        const data = {};

        data.status = "CANCEL";

        const cancelUrl = `http://localhost:8080/api/appointments/${id}/cancel`;
        const fetchConfig = {
            method: "put",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(cancelUrl, fetchConfig);
        if (response.ok) {
            const cancelAppointment = await response.json();
            setStatus(cancelAppointment.status);
            setAppointments(appointments.filter((appointment) => appointment.status === "PENDING"));
            fetchAppointmentData();
        }
    }

    // Update status to "FINISHED"
    const handleFinish = async (id) => {

        const data = {};

        data.status = "FINISHED";

        const finishUrl = `http://localhost:8080/api/appointments/${id}/finish`;
        const fetchConfig = {
        method: "put",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
        };

        const response = await fetch(finishUrl, fetchConfig);
        if (response.ok) {
            const finishAppointment = await response.json();
            setStatus(finishAppointment.status);
            setAppointments(appointments.filter((appointment) => appointment.status === "PENDING"));
            fetchAppointmentData();
        }
    }

    // Determines if customer is vip
    function isVip(vin) {
        // Loops through list of automobiles in inventory
        let isVip = "No";
        for (let auto of automobiles) {
            // if vin from appointment list is the same as the vin in the inventory list
            if (vin == auto.vin) {
                isVip = "Yes";
            }
            }
        return <td>{isVip}</td>
    }

    return (
        <>
        <h1>Service Appointments</h1>
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
                </tr>
            </thead>
            <tbody>
            {appointments.map(appointment => {
                return (
                    <tr key={appointment.id}>
                        <td>{appointment.vin.toUpperCase()}</td>
                        {isVip(appointment.vin)}
                        <td>{appointment.customer}</td>
                        <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
                        <td>{new Date(appointment.date_time).toLocaleTimeString()}</td>
                        <td>{appointment.technician}</td>
                        <td>{appointment.reason}</td>
                        <td><button onClick={() => handleCancel(appointment.id)} type="button" className="btn btn-danger">Cancel</button></td>
                        <td><button onClick={() => handleFinish(appointment.id)} type="button" className="btn btn-success">Finish</button></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        </>
    )
}

export default ServiceAppointmentList
