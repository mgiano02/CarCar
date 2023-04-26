import React, { useEffect, useState } from 'react';

function ModelList(props){
    const [autos, setAutos] = useState([])

    const fetchData = async() => {
        const response = await fetch('http://localhost:8100/api/automobiles/');
        if (response.ok) {
            const data = await response.json();
            setAutos(data.autos)
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
                {autos.map(auto => {
                    return (
                        <tr key="auto.vin">
                            <td>{auto.model.name}</td>
                            <td>{auto.model.manufacturer.name}</td>
                            <td>
                                <img src={auto.model.picture_url} />
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
