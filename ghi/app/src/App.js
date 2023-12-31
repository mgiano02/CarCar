import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalespeopleList from './SalespeopleList';
import ManufacturerList from './ManufacturerList';
import ManufacturerCreate from './ManufacturerCreate';
import ModelList from './ModelList';
import SalespeopleCreate from './SalespeopleCreate';
import CustomerList from './CustomerList';
import CustomerCreate from './CustomerCreate';
import SaleList from './SaleList';
import SaleCreate from './SaleCreate';
import SaleHistory from './SalespersonHistory';
import TechnicianCreate from './TechnicianCreate';
import TechnicianList from './TechnicianList';
import ServiceAppointmentCreate from './ServiceAppointmentCreate';
import ServiceAppointmentList from './ServiceAppointmentList';
import VehicleModelCreate from './VehicleModelCreate';
import AutomobileList from './AutomobileList';
import AutomobileCreate from './AutomobileCreate';
import ServiceHistory from './ServiceHistory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers" element={<ManufacturerList />} />
          <Route path="manufacturers/new" element={<ManufacturerCreate />} />
          <Route path="models" element={<ModelList />} />
          <Route path="models/new" element={<VehicleModelCreate />} />
          <Route path="automobiles" element={<AutomobileList />} />
          <Route path="automobiles/new" element={<AutomobileCreate />} />
          <Route path="salespeople" element={<SalespeopleList />} />
          <Route path="salespeople/new" element={<SalespeopleCreate />} />
          <Route path="customers" element={<CustomerList />} />
          <Route path="customers/new" element={<CustomerCreate />} />
          <Route path="sales" element={<SaleList />} />
          <Route path="sales/new" element={<SaleCreate />} />
          <Route path="salespeople/history" element={<SaleHistory />} />
          <Route path="technicians/new" element={<TechnicianCreate />} />
          <Route path="technicians" element={<TechnicianList />} />
          <Route path="appointments/new" element={<ServiceAppointmentCreate />} />
          <Route path="appointments" element={<ServiceAppointmentList />} />
          <Route path="appointments/history" element={<ServiceHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
