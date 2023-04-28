import React, {useState, useEffect} from 'react';


function SaleCreate(props) {
    const [autos, setAutos] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [salespeople, setSalespeople] = useState([])
    const [vin, setVin] = useState('');
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [price, setPrice] = useState('')

    const fetchData = async () => {
        const autoUrl = 'http://localhost:8100/api/automobiles/';
        const autoResponse = await fetch(autoUrl);
        const customerUrl = 'http://localhost:8090/api/customers/';
        const customerResponse = await fetch(customerUrl);
        const salespeopleUrl = 'http://localhost:8090/api/salespeople/';
        const salespeopleResponse = await fetch(salespeopleUrl);

        if (autoResponse.ok) {
            const data = await autoResponse.json();
            setAutos(data.autos)
        }
        if (customerResponse.ok) {
            const data = await customerResponse.json();
            setCustomers(data.customers);
        }
        if (salespeopleResponse.ok) {
            const data = await salespeopleResponse.json();
            setSalespeople(data.salespeople);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value)
    }
    const handleSalespersonChange = (event) => {
        const value = event.target.value;
        setSalesperson(value)
    }
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value)
    }
    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPrice(value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};

        data.automobile = vin;
        data.customer = customer;
        data.salesperson = salesperson;
        data.price = price;

        const salesUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(salesUrl, fetchConfig);
        if (response.ok) {
            setVin('');
            setSalesperson('');
            setCustomer('');
            setPrice('');
        }
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Record a new sale</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <select onChange={handleVinChange} placeholder="vin" id="vin" className="form-select" value={vin}>
                        <option>Choose an automobile VIN...</option>
                        {autos.map(auto => {
                            return (
                                <option key={auto.vin} value={auto.vin}>
                                    {auto.vin}
                                </option>
                            );
                        })};
                    </select>
                </div>
                <div className="mb-3">
                    <select onChange={handleSalespersonChange}placeholder="salesperson" id="salesperson" className="form-select" value={salesperson}>
                        <option>Choose a salesperson...</option>
                        {salespeople.map(person => {
                            return (
                                <option key={person.employee_id} value={person.employee_id}>
                                    {person.first_name} {person.last_name}
                                </option>
                            );
                        })};
                    </select>
                </div>
                <div className="mb-3">
                    <select onChange={handleCustomerChange} placeholder="customer" id="customer" className="form-select" value={customer}>
                        <option>Choose a customer</option>
                        {customers.map(person => {
                            return (
                                <option key={person.id} value={person.id}>
                                    {person.first_name} {person.last_name}
                                </option>
                            );
                        })};
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handlePriceChange} placeholder="price" required type="text" name="price" id="price" className="form-control" value={price}></input>
                    <label>Price...</label>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default SaleCreate;
