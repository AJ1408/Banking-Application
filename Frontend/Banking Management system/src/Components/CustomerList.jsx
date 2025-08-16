import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/customers");
      setCustomers(result.data);
    } catch (err) {
      console.error("Error fetching customers:", err);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/customers/${id}`);
      loadCustomers(); // refresh list
    } catch (err) {
      console.error("Error deleting customer:", err);
    }
  };

  return (
    <div>
      <h2>Customers</h2>
      <Link to="/add">➕ Add Customer</Link>
      <ul>
        {customers.map((cust) => (
          <li key={cust.id}>
            {cust.name} - {cust.email} - Balance: ₹{cust.balance}
            <Link to={`/update/${cust.id}`} style={{ marginLeft: "20px", marginTop: "5px"}}>
              ✏️ Edit
            </Link>
            <button
              onClick={() => deleteCustomer(cust.id)}
              style={{ marginLeft: "20px", marginTop: "5px" }}
            >
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
