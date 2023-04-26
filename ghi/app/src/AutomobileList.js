import React, { useEffect, useState } from "react";

function AutomobileList() {

    const[models, setModels] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8100/api/models/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data.models);
            setModels(data.models);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <h1>Automobiles</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Color</th>
                    <th>Year</th>
                    <th>VIN</th>
                    <th>Sold</th>
                    <th>Model</th>
                </tr>
            </thead>
            <tbody>
            {models.map(model => {
                return (
                    <tr key={model.vin}>
                        <td>{model.color}</td>
                        <td>{model.year}</td>
                        <td>{model.vin}</td>
                        <td>{model.sold}</td>
                        <td>{model.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        </>
    )
}

export default AutomobileList
