import React, {useEffect, useState} from "react";

function VehicleModelCreate() {

    const [manufacturers, setManufacturers] = useState([]);


    const [name, setName] = useState("");
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const [picture, setPicture] = useState("");
    const handlePictureChange = (event) => {
        const value = event.target.value;
        setPicture(value);
    }
    const [manufacturer, setManufacturer] = useState("");
    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    const fetchData = async () => {
        const url = "http://localhost:8100/api/manufacturers/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setManufacturers(data.manufacturers)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    const handleSubmit = async (event) => {
        event.PreventDefault();

        const data = {};

        data.name = name;
        data.picture_url = picture;
        data.manufacturer = manufacturer;

        const modelUrl = "http://localhost:8100/api/models/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok) {
            const newModel = await response.json();
            console.log(newModel);

            setName("");
            setPicture("");
            setManufacturers("");
        }
    }

    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a Vehicle Model</h1>
              <form onSubmit={handleSubmit} id="create-form">
                <div className="form-floating mb-3">
                  <input onChange={handleNameChange} placeholder="Vehicle Model Name" required value={name} type="text" name="name" id="name" className="form-control"></input>
                  <label htmlFor="name">Vehicle Model Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={handlePictureChange} placeholder="Vehicle Model Picture" required value={picture} type="text" name="picture_url" id="picture_url" className="form-control"></input>
                  <label htmlFor="picture_url">Vehicle Model Picture</label>
                </div>
                <div className="form-floating mb-3">
                  <select onChange={handleManufacturerChange} placeholder="Manufacturer" required value={manufacturer} name="manufacturer" id="manufacturer" className="form-select">
                  <option value="">Manufacturer</option>
                  {manufacturers.map(manufacturer => {
                    return (
                        <option key={manufacturer.name} value={manufacturer.name}>
                            {manufacturer.name}
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

export default VehicleModelCreate
