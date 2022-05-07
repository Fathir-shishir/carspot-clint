import React from 'react';
import { Card } from 'react-bootstrap';

const SampleProduct = ({product}) => {
    console.log(product)
    const {_id,name,price,picture,description}=product
    return (
        <div >
        <Card>
    <Card.Img className='w-5 h-5' variant="top" src={picture} />
    
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
    <button  className='btn btn-primary'>Sotck Update</button>
  </Card>
            
        </div>
    );
};

export default SampleProduct;