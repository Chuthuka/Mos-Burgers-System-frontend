import React, { useEffect, useState } from "react";
import "./PlaceOrder.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const PlaceOrder = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [amountGiven, setAmountGiven] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/stock/All")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const updateQuantity = (itemId, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.itemId === itemId
            ? { ...item, qty: Math.max(1, item.qty + change) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.itemId !== itemId));
  };


  const totalAmount = cart.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );
  const balance = amountGiven ? amountGiven - totalAmount : 0;





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
