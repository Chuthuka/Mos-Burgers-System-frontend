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

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const options = {
        maxSizeMB: 1, 
        maxWidthOrHeight: 800, 
        useWebWorker: true,
      };
  
      try {
        const compressedFile = await imageCompression(file, options);
        setImage(compressedFile);
      } catch (error) {
        console.error("Image compression failed:", error);
      }
    }
  };
};

export default AddProduct;
