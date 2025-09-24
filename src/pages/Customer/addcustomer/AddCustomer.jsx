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
  

  
};

export default AddCustomer;
