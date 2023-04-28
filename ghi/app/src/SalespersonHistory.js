import React, {useState, useEffect} from 'react';

function SaleHistory(props) {
    const [salespeople, setSalespeople] = useState([]);
    const [sales, setSales] = useState([]);
    const [filteredSales, setFilteredSales] = useState([])

    const fetchData = async () => {
        const response = await fetch('http://localhost:8090/api/salespeople');
        const salesResponse = await fetch('http://localhost:8090/api/sales/');

        if (response.ok) {
            const data = await response.json();
            setSalespeople(data.salespeople)
        }
        if (salesResponse.ok) {
            const salesData = await salesResponse.json();
            setSales(salesData.sales)

        }
    }

    useEffect(() => {
        fetchData();
      }, []);

    const handleSalespersonChange = (event) => {
        const person = event.target.value;
        const filtered = sales.filter(sale => sale.salesperson_id == person)
        setFilteredSales(filtered);
    }


    return (
        <>
        <h1>Salesperson History</h1>
        <div>
            <select onChange={handleSalespersonChange} required name="salespeople" className='mt-2' id="salespeople">
                <option>Choose a salesperson</option>
                {salespeople.map(person => {
                    return (
                        <option key={person.employee_id} value={person.employee_id}>
                        {person.first_name} {person.last_name}
                        </option>
                    )
                })}
            </select>
        </div>
        <table className="table table-striped">

            <thead>
                <tr>
                    <th>Salesperson</th>
                    <th>Customer</th>
                    <th>VIN</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {filteredSales.map(sale => {
                    return (
                        <tr key={sale.id}>
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
    );
};

export default SaleHistory;
