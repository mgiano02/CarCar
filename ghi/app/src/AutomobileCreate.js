import React, { useEffect, useState } from "react";

function AutomobileCreate() {

    const [models, setModels] = useState([]);
    const [status, setStatus] = useState("")

    const [color, setColor] = useState("");
    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }
    const [year, setYear] = useState("");
    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }
    const [vin, setVin] = useState("");
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }
    // const [sold, setSold] = useState("");
    // const handleSoldChange = (event) => {
    //     const value = event.target.value;
    //     setSold(value);
    // }
    const [model, setModel] = useState("");
    const handleModelChange = (event) => {
        const value = event.target.value;
        setModel(value);
    }

    const fetchData = async () => {
        const url = "http://localhost:8100/api/models/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
        }
    }
    function isStatus() {
      if (status === 'success') {
          return (
              <p className="alert alert-success">Automobile successfully created</p>
          )
      } else if (status === 'error') {
          return (
              <p className="alert alert-danger">Can't create automobile</p>
          )
      }
  }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = {}

        data.color = color;
        data.year = year;
        data.vin = vin;
        // data.sold = sold;
        data.model_id = model;

        const automobileUrl = "http://localhost:8100/api/automobiles/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(automobileUrl, fetchConfig);
        if (response.ok) {

            setColor("");
            setYear("");
            setVin("");
            // setSold("");
            setModel("");
            setStatus("success")
        } else {
          setStatus("error")
        }
    }

    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create an Automobile</h1>
              {isStatus()}
              <form onSubmit={handleSubmit} id="create-form">
                <div className="form-floating mb-3">
                  <input onChange={handleColorChange} placeholder="Color" required value={color} type="text" name="color" id="color" className="form-control"></input>
                  <label htmlFor="name">Color</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={handleYearChange} placeholder="Year" required value={year} type="number" name="year" id="year" className="form-control"></input>
                  <label htmlFor="picture_url">Year</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={handleVinChange} placeholder="VIN" required value={vin} type="text" name="vin" id="vin" className="form-control"></input>
                  <label htmlFor="name">VIN</label>
                </div>
                {/* <div className="form-floating mb-3">
                  <input onChange={handleSoldChange} placeholder="Sold" required type="text" name="sold" id="sold" className="form-control"></input>
                  <label htmlFor="name">Sold</label>
                </div> */}
                <div className="mb-3">
                  <select onChange={handleModelChange} placeholder="Model" required value={model} name="model" id="model" className="form-select">
                  <option value="">Model</option>
                  {models.map(model => {
                    return (
                        <option key={model.id} value={model.id}>
                            {model.name}
                        </option>
                    );
                  })}
                  </select>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
    )
}

export default AutomobileCreate
