import React, { useEffect, useState } from "react";

function AutomobileList() {

    const[automobiles, setAutomobiles] = useState([]);


    const fetchData = async () => {
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
        fetchData();
    }, []);


    function isSold(sold) {
        if (sold == true) {
                return (
                    "Yes"
                )
            } else {
                return (
                    "No"
                )
            }
        }

    return (
        <>
        <h1>Automobiles</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Color</th>
                    <th>Year</th>
                    <th>VIN</th>
                    <th>Model</th>
                    <th>Sold</th>
                </tr>
            </thead>
            <tbody>
            {automobiles.map(automobile => {
                return (
                    <tr key={automobile.vin}>
                        <td>{automobile.color}</td>
                        <td>{automobile.year}</td>
                        <td>{automobile.vin}</td>
                        <td>{automobile.model.name}</td>
                        <td>{isSold(automobile.sold)}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        </>
    )
}

export default AutomobileList
