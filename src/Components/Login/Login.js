
import { Toast } from 'bootstrap';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Login = () =>  {
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const [user1] = useAuthState(auth);
    const [sendPasswordResetEmail, sending, eError] = useSendPasswordResetEmail(
      auth
    );
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user1){
        navigate(from, { replace: true });
        console.log(user1.email)
    }
    const resetPassword =(event)=>{
      if(email){
        sendPasswordResetEmail(email)
        Toast("Email send!")
      }
    }
 const handelEmailOnblur =(event)=>{
    setEmail(event.target.value)
 }
 const handelPasswordOnblur =(event)=>{
    setPassword(event.target.value)
 }
 const handleSubmitForm =(event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(email, password)
    console.log(user)
 }
    return (
        <div >
            <Form onSubmit={handleSubmitForm} className='w-50 mx-auto mt-5 border-light p-5 bg-light'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control onBlur={handelEmailOnblur} name='email' type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control onBlur={handelPasswordOnblur} name='password'  type="password" placeholder="Password" />
  </Form.Group>
  
  <Button  variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default Login;