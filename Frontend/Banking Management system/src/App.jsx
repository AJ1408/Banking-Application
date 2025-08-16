import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerList from "./Components/CustomerList";
import AddCustomer from "./Components/AddCustomer";
import UpdateCustomer from "./Components/UpdateCustomer";
import './App.css'

function App() {
  
  return (
    <>
     <Router>
      <div className="container">
        <h1>Banking Application</h1>
        <Routes>
          <Route path="/" element={<CustomerList />} />
          <Route path="/add" element={<AddCustomer />} />
          <Route path="/update/:id" element={<UpdateCustomer />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
