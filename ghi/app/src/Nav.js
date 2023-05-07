import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Inventory</NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="nav-link dropdown-item" to="/manufacturers">Manufacturers</NavLink>
                  <NavLink className="nav-link dropdown-item" to="/manufacturers/new">Create a manufacturer</NavLink>
                <div className="dropdown-divider"></div>
                  <NavLink className="nav-link dropdown-item" to="/models">Models</NavLink>
                  <NavLink className="nav-link dropdown-item" to="/models/new">Add a Vehicle Model</NavLink>
                <div className="dropdown-divider"></div>
                  <NavLink className="nav-link dropdown-item" to="/automobiles">Automobiles</NavLink>
                  <NavLink className="nav-link dropdown-item" to="/automobiles/new">Add an Automobile</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sales</NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="nav-link" to="/salespeople">Salespeople</NavLink>
                <NavLink className="nav-link" to="/salespeople/new">Add a salesperson</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="nav-link" to="/customers">Customers</NavLink>
                <NavLink className="nav-link" to="/customers/new">Add a Customer</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="nav-link" to="/sales">Sales</NavLink>
                <NavLink className="nav-link" to="/sales/new">Add a sale</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="nav-link" to="/salespeople/history">Salesperson History</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle hover" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Service</NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="nav-link" to="/technicians/new">Add a Technician</NavLink>
                <NavLink className="nav-link" to="/technicians">Technicians</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="nav-link" to="/appointments/new">Add an Appointment</NavLink>
                <NavLink className="nav-link" to="/appointments">Service Appointments</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="nav-link" to="/appointments/history">Service History</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Nav;
