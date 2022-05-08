import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { updatePassword } from 'firebase/auth';
import useToken from '../useToken/useToken';


const Register = () =>  {
  const [name,setName]= useState("")
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [confirmpassword,setConfirmpassword] = useState('')
  const [isChecked,setChecked] = useState(false)
  const [checkpasseword,setcheckpasseword] = useState('')
  const navigate = useNavigate();

  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  // const [sendEmailVerification, sending, error] = useSendEmailVerification(
  //   auth,{sendEmailVerification:true}
  // );
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    Eerror,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  const [token]=useToken(user);
  
     const handelNameOnblur =(event)=>{
      setName(event.target.value)
        
     }
     const handelEmailOnblur =(event)=>{
        setEmail(event.target.value)
        
     }
     const handelPasswordOnblur =(event)=>{
      setPassword(event.target.value)
        
     }
     const handelConfirmPasswordOnblur =(event)=>{
      setConfirmpassword(event.target.value)
        
     }
   
  
     const handleSubmitForm= async(event)=>{
       event.preventDefault()
       if( password === confirmpassword ){
      await  createUserWithEmailAndPassword(email, password)
      await updateProfile({ displayName : name });
      alert('Updated profile');  
        
        
       }
       else{
        setcheckpasseword('Your passWord did not match')
       }
     
       
      
     }
     if (token) {
      navigate('/home')
      console.log(user)
    }

    return (
        <div className=''>
        <form onSubmit={handleSubmitForm} className='w-50 mx-auto mt-4  p-5 bg-light'>
  <div className="mb-3">
    <input onBlur={handelNameOnblur} type="text" placeholder='Name' className="form-control" id="exampleInputName" required/>
  </div>
  <div className="mb-3">
    <input onBlur={handelEmailOnblur} type="email" placeholder='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  <div className="mb-3">
    <input onBlur={handelPasswordOnblur} type="password" placeholder='Password' className="form-control" id="exampleInputPassword1" required/>
  </div>
  <div className="mb-3">
    <input onBlur={handelConfirmPasswordOnblur} type="password" placeholder='Confirm Password' className="form-control" id="exampleInputConfirmPassword1" required/>
  </div>
  <div className="mb-3 form-check">
    <input onClick={()=>setChecked(!isChecked)}
    className={isChecked ? 'text-primary': 'text-danger'} type="checkbox"  id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Terms and Condition</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    );
};

export default Register;