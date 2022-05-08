import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useProductsDetails from '../Components/Hooks/useProductsDetails';

const StockUpdate = () => {
    const [producDetails,setProductsDetails] = useProductsDetails()

    return (
        <div>
         
         <Card className='mx-auto' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={producDetails.picture} />
  <Card.Body>
    <Card.Title>{producDetails.name}</Card.Title>
    <p> Supplier :{producDetails.supplierName}</p>
    <p> Quantity :{producDetails.quantity}</p>
    <p> Price :{producDetails.price}</p>
    <Card.Text>
    {producDetails.description}
    </Card.Text>

  </Card.Body>
</Card>
        </div>
    );
};

export default StockUpdate;