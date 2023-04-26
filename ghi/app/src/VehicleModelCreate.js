import React, {useEffect, useState} from "react";

function VehicleModelCreate() {

    const [models, setModels] = useState([]);


    const [name, setName] = useState("");
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const fetchData = async () => {
        const url = "http://localhost:8100/api/models/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setModels(data.models)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a Vehicle Model</h1>
              <form id="create-form">
                <div className="form-floating mb-3">
                  <input placeholder="Vehicle Model Name" required type="text" name="name" id="name" className="form-control"></input>
                  <label htmlFor="name">Vehicle Model Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input placeholder="Vehicle Model Picture" required type="text" name="picture_url" id="picture_url" className="form-control"></input>
                  <label htmlFor="picture_url">Vehicle Model Picture</label>
                </div>
                <div className="form-floating mb-3">
                  <select placeholder="Manufacturer" required name="manufacturer" id="manufacturer" className="form-select">
                  <option value="">Manufacturer</option>
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
