import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OrderHistory.css';
import Sidebar from '../../Components/Sidebar/Sidebar';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

 
};

export default OrderHistory;
