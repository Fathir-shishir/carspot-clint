import React, { useState } from 'react';
import UseProducts from '../Hooks/UseProducts';
import './Cars.css'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';

const Cars = () => {
    const[products,setProducts] = UseProducts([]);
    const [deliver,setDeliver]=useState({});
    let newDeliver=parseInt(deliver?.quantity);
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
    
      const handleDelete = (id) => {
        //Delete a Data from Server
    
        const proceed = window.confirm("Are you sure want to delete?");
        if (proceed) {
        fetch(`http://localhost:5000/service/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        const remainingProducts = products.filter((product) => product._id !== id);
        setProducts(remainingProducts);
        }
      };
      const deliveredQuantity=(id)=>{
        const updatedQuantity={newDeliver};
        const url=`http://localhost:5000/restock/${id}`;
            fetch(url,{
                method:"PUT",
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify(updatedQuantity),
            })
            .then(res=>res.json())
            .then(data=>{
            console.log(data)
            alert("Delivered");
        
            })
        
      }
      
    return (
        <div>
           <table className='mx-auto mt-5'>
           <tr className='p-4'>
              <th>ID</th>
               <th>NAME</th>
               <th> Image</th>
               <th>PRICE</th>
               <th>quantity</th>
               <th>Delete</th>
               
           </tr>
           {
            products && products.length > 0 ? 
            products.map(product =>
            <tr>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td><img src={product.picture} alt="" /></td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>

                <td><button onClick={()=>handleDelete(product._id)}>Delete</button></td>
                 <Link to={`/update/${product._id}`}><button>Restock</button></Link>
               
            </tr>
            )  : 'Loading' 
           }
               
           </table>
        </div>
    );
};

export default Cars;