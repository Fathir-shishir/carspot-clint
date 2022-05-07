import React from 'react';
import UseProducts from '../Hooks/UseProducts';
import SampleProduct from '../SampleProduct/SampleProduct';
import './SampleItems.css'

const SampleItems = () => {
    const[products] = UseProducts('')
    const sampleProducts= products.slice(0,6)
    return (
        <div className='items-container container mt-5'>
            {
                sampleProducts.map(product=><SampleProduct 
                key={product._id}
                product={product}
                ></SampleProduct>)
            }
        </div>
    );
};

export default SampleItems;