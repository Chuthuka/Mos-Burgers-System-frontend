import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
import { Users, Box, ShoppingCart } from 'lucide-react';
import axios from 'axios';

const Dashboard = () => {
    const [counts, setCounts] = useState({
        customers: 0,
        products: 0,
        orders: 0,
      });
    
      useEffect(() => {
        axios.get('http://localhost:8080/api/dashboard/counts')
          .then(res => setCounts(res.data))
          .catch(err => console.error("Failed to fetch counts", err));
      }, []);
      
};

export default Dashboard;


