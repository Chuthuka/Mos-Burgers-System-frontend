import React, { useEffect, useState } from "react";
import "./PlaceOrder.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const PlaceOrder = () => {
  



const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.itemId === product.itemId
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.itemId === product.itemId ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };




 const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category.toUpperCase() === selectedCategory.toUpperCase()
        );












};

export default PlaceOrder;
