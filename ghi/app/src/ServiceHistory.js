import React, {useEffect, useState} from "react";

function ServiceHistory() {

    const [appointments, setAppointments] = useState([]);
    const [automobiles, setAutomobiles] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8080/api/appointments/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json()
            setAppointments(data.appointments)
            setfilteredAppointments(data.appointments)
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
            setAutomobiles(data.autos);
        }
    }

    useEffect(() => {
        fetchData();
        fetchAutomobileData();
    }, []);

    const [searchVin, setSearchVin] = useState("");
    const handleSearchVinChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchVin(value);
    }

    const [filteredAppointments, setfilteredAppointments] = useState([]);

    const handleClick = () => {
        const filterAppointments = appointments.filter((appointment) => appointment.vin.toLowerCase().includes(searchVin))
        setfilteredAppointments(filterAppointments)
    }

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


    // function filterVin() {
    //     setAppointments(appointments.filter((appointment) => appointment.vin.toLowerCase().includes(searchVin)))
    // }

    // Update line 57 below to this and remove the onclick to auto update page without buttom submission.
    // {appointments.filter((appointment) => appointment.vin.toLowerCase().includes(searchVin)).map(appointment => {

    // Add another button with an onclick to call fetchData() again to display all appointment by resetting the state.

    return (
        <>
        <h1>Service Appointments</h1>
            <input onChange={handleSearchVinChange} className="form-control mt-3" type="search" aria-label="Search" placeholder="Search by VIN"/>
            <button onClick={handleClick} className="btn btn-outline-success mt-2">Search</button>
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
                {filteredAppointments.map(appointment => {
                    return (
                        <tr key={appointment.vin}>
                            <td>{appointment.vin.toUpperCase()}</td>
                            {isVip(appointment.vin)}
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
