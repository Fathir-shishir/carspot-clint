import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useProductsDetails = () => {
    const{id}= useParams()
    const [producDetails,setProductsDetails]= useState({})
    useEffect(()=>{
        fetch(`https://aqueous-eyrie-63184.herokuapp.com/service/${id}`)
        .then ((res)=>res.json())
        .then((data)=>setProductsDetails(data))
    },[id])
    return [producDetails,setProductsDetails]
};

export default useProductsDetails;