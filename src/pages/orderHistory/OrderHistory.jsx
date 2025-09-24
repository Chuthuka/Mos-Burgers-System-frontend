import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OrderHistory.css';
import Sidebar from '../../Components/Sidebar/Sidebar';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

 const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/order/all');
      const sortedOrders = response.data.sort(
        (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
      );
      setOrders(sortedOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };


  
};

export default OrderHistory;
