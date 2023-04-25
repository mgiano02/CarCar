import React, { useEffect, useState } from 'react';

function SalespeopleList(props){
    const [salespeople, setSalespeople] = useState([])

    const fetchData = async () => {
        const response = await fetch('http://localhost:8090/api/salespeople');
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setSalespeople(data.salespeople);
        };
    };

    useEffect(() => {
        fetchData();
    });

    return (
    <>
    <h1>Salespeople</h1>
    <table className="table table-striped">
        <thead>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
        </thead>
        <tbody>
            <tr>
                <td>hi</td>
            </tr>
        </tbody>
    </table>
    </>
    )
}

export default SalespeopleList;
