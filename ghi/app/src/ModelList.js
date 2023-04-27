import React, { useEffect, useState } from 'react';

function ModelList(props){
    const [models, setModels] = useState([])

    const fetchData = async() => {
        const response = await fetch('http://localhost:8100/api/models/');
        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
            console.log(data)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
        <h1>Models</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {models.map(model => {
                    return (
                        <tr key="auto.vin">
                            <td>{model.name}</td>
                            <td>{model.manufacturer.name}</td>
                            <td>
                                <img src={model.picture_url} />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}
export default ModelList;
