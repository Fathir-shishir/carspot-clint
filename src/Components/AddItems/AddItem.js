import { Toast } from 'bootstrap';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const AddItem = () => {
  const [user] = useAuthState(auth)
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();

  

    //send data to server
    const url = `https://aqueous-eyrie-63184.herokuapp.com/service`;
    fetch(url,{
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Data is",result);
        if (result.insertedId) {
          console.log("inserted id:", result.insertedId);
          alert("Your Item is added !");        
        }
      });
  };
  
  
  return (
    <div>
      <form className='d-flex flex-column gap-4 w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <input placeholder='email' readOnly value={user.email} type="email" {...register("email")} />
      <input placeholder='supplier name' {...register("supplier name", { required: true, maxLength: 20 })} />
      <input placeholder='picture' {...register("picture")} />
      <input placeholder='price' type="number" {...register("price")} />
      <input placeholder='quantity' type="number" {...register("quantity")} />
      <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
      <input type="submit" />
    </form>
    </div>
  );
};

export default AddItem;