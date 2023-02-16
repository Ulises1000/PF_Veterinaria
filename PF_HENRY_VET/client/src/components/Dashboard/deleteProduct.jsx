import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearForm, getAllProducts, getProduct, updateProduct } from "../../redux/action/index.jsx";
import { validate } from "./Validators";
import {Link, useNavigate, useParams} from 'react-router-dom'



function deleteProduct(){
  return (
    <div>
      delete
    </div>
  );
}

export default deleteProduct;
