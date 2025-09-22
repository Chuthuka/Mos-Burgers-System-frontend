import React, { useState } from "react";
import axios from "axios"; 
import "./AddProduct.css";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import imageCompression from "browser-image-compression";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const[description,setDescription] = useState("");
  const [loading, setLoading] = useState(false); 

  
};

export default AddProduct;
