import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateCustomer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState({ name: "", email: "", balance: "" });
  const navigate = useNavigate();

  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/customers/${id}`);
      setCustomer(result.data);
    } catch (err) {
      console.error("Error loading customer:", err);
    }
  };

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/customers/${id}`, customer);
      navigate("/");
    } catch (err) {
      console.error("Error updating customer:", err);
    }
  };

  return (
    <div>
      <h2>Update Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="balance"
          value={customer.balance}
          onChange={handleChange}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
