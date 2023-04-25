import React, { useEffect, useState } from 'react';

function CustomerList(props) {
    return (
        <>
        <h1>Customers</h1>
        <table className="table table-striped">
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Address</th>
            </thead>
            <tbody>
                <tr>
                    <td>Add data</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default CustomerList;
