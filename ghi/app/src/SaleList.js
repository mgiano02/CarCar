import React, {useState, useEffect} from 'react';

function SaleList(props) {
    const [sales, setSales] = useState([])

    const fetchData = async () => {
        const response = await fetch('http://localhost:8090/api/sales/');
        if (response.ok) {
            const data = await response.json();
            setSales(data.sales)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <h1>Sales</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Salesperson Employee ID</th>
                    <th>Salesperson Name</th>
                    <th>Customer</th>
                    <th>VIN</th>
                    <th>Price</th>
                </tr>

            </thead>
            <tbody>
                {sales.map(sale => {
                    return (
                        <tr key={sale.id}>
                            <td>{sale.salesperson_id}</td>
                            <td>{sale.salesperson}</td>
                            <td>{sale.customer}</td>
                            <td>{sale.automobile}</td>
                            <td>{sale.price}</td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
        </>
    )
}

export default SaleList;
