import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./CustomerManagement.css";
import { Link } from "react-router-dom";
import axios from "axios";

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedCustomer, setUpdatedCustomer] = useState({
    id: "",
    name: "",
    address: "",
    contactNumber: "",
    email: "",
  });


  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/customer/all");
        setCustomers(response.data);  
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };
    fetchCustomers();
  }, []);

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
 const handleEditClick = (customer) => {
    setUpdatedCustomer({
      id: customer.id,
      name: customer.name,
      address: customer.address,
      contactNumber: customer.contactNumber,
      email: customer.email,
    });
    setSelectedCustomer(customer);
    setShowModal(true); 
  };
  






};

export default CustomerManagement;








