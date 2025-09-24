import React, { useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./AddCustomer.css";
import axios from "axios";

const AddCustomer = () => {
  const [customerData, setCustomerData] = useState({
    name: "",
    address: "",
    contactNumber: "",
    email: "",
  }); 

  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      const response = await axios.post(
        "http://localhost:8080/api/customer/add",
        customerData
      );

      if (response.status === 200 || response.status === 201) {
        alert("Customer added successfully!");
        resetForm();
       
      } else {
        alert("Failed to add customer.");
      }
    } catch (error) {
      console.error("Error adding customer:", error);
      alert("There was an error adding the customer. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  

  
};

export default AddCustomer;
