import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useProductsDetails = () => {
    const{id}= useParams()
    const [producDetails,setProductsDetails]= useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${id}`)
        .then ((res)=>res.json())
        .then((data)=>setProductsDetails(data))
    },[id])
    return [producDetails,setProductsDetails]
};

export default useProductsDetails;