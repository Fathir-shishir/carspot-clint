import React from 'react';
import UseProducts from '../Hooks/UseProducts';
import './Cars.css'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const Cars = () => {
    const[products] = UseProducts([])
    const columns = [{
        dataField: 'id',
        text: 'ID'
      }, {
        dataField: 'name',
        text: 'Name'
      }, {
        dataField: 'price',
        text: 'Price'
      }, {
        dataField: 'image',
        text: 'Image'
      }];
    
    
    return (
        <div>
           <table className='mx-auto mt-5'>
           <tr className='p-4'>
              <th>ID</th>
               <th>NAME</th>
               <th> Image</th>
               <th>PRICE</th>
           </tr>
           {
            products && products.length > 0 ? 
            products.map(product =>
            <tr>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td><img src={product.picture} alt="" /></td>
                <td>{product.price}</td>
            </tr>
            )  : 'Loading' 
           }
               
           </table>
        </div>
    );
};

export default Cars;