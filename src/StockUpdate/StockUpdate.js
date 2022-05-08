import React from 'react';
import useProductsDetails from '../Components/Hooks/useProductsDetails';

const StockUpdate = () => {
    const [producDetails,setProductsDetails] = useProductsDetails()

    return (
        <div>
         <h1>hello {producDetails.name}</h1>
        </div>
    );
};

export default StockUpdate;