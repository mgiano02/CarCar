import React, {useEffect, useState} from "react";

function ServiceAppointmentList() {

    const [appointments, setAppointments] = useState([]);
    const [automobiles, setAutomobiles] = useState([]);
    const [status, setStatus] = useState("PENDING");


    const fetchAppointmentData = async () => {
        const url = "http://localhost:8080/api/appointments/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setAppointments(data.appointments)
        }
    }


    const fetchAutomobileData = async () => {
        const url = "http://localhost:8100/api/automobiles/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();

            // if (data.autos.sold == true) {
            //     return (
            //         <td>Yes</td>
            //     )
            // } else {
            //     return (
            //         <td>No</td>
            //     )
            // }

            console.log(data.autos);
            setAutomobiles(data.autos);
        }
    }

    useEffect(() => {
        fetchAppointmentData();
        fetchAutomobileData();
    }, []);


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
            console.log(cancelAppointment);
            setStatus(cancelAppointment.status);
        }
    }

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
            console.log(finishAppointment);
            setStatus(finishAppointment.status);
        }
    }

    // console.log("automobiles", automobiles)
    function isVip(vin) {
        // Loops through list of automobiles in inventory
        let isVip = "No";
        for (let auto of automobiles) {
            // if vin from appointment list is the same as the vin in the inventory list
            if (vin == auto.vin) {
                console.log("test");
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
                    <tr key={appointment.vin}>
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
