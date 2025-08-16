import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddCustomer() {
  const [customer, setCustomer] = useState({ name: "", email: "", balance: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/customers", customer);
      navigate("/");
    } catch (err) {
      console.error("Error adding customer:", err);
    }
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={customer.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={customer.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="balance"
          placeholder="Balance"
          value={customer.balance}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Details </button>
      </form>
    </div>
  );
}
