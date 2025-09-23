import React, { useEffect, useState } from "react";
import "./PlaceOrder.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const PlaceOrder = () => {
  






  

 const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category.toUpperCase() === selectedCategory.toUpperCase()
        );












};

export default PlaceOrder;
