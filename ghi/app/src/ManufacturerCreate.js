import React, { useEffect, useState } from 'react';

function ManufacturerCreate(props) {
    const [manufacturer, setManufacturer] = useState('')
    const [status, setStatus] = useState('')

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = manufacturer

        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method:"post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(manufacturerUrl, fetchConfig);
        if (response.ok) {
            setManufacturer('')
            setStatus('success')
        } else {
            setStatus('error')
        }
    }
    function isStatus() {
        if (status === 'success') {
            return (
                <p className="alert alert-success">Manufacturer successfully created</p>
            )
        } else if (status === 'error') {
            return (
                <p className="alert alert-danger">Can't create manufacturer</p>
            )
        }
    }


    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a manufacturer</h1>
              {isStatus()}
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input onChange={handleManufacturerChange} placeholder="Manufacturer name" required type="text" name="manufacturer_name" id="manufacturer_name" className="form-control" value={manufacturer}></input>
                  <label htmlFor="manufacturer_name">Manufacturer name...</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
    )
}

export default ManufacturerCreate;
