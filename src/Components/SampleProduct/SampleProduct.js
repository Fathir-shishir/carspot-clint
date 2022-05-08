import React from 'react';
import { Card } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

const SampleProduct = ({product}) => {
  const navigate = useNavigate();
    console.log(product)
    const {_id,name,price,picture,description}=product
    const redirectStock = (id)=>{
      navigate(`/stockupdate/${id}`)
    }
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
    <button onClick={()=> redirectStock(_id)}  className='btn btn-primary'>Sotck Update</button>
  </Card>
            
        </div>
    );
};

export default SampleProduct;