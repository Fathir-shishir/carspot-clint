import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (error) {
        return (
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          navigate('/home')
        );
      }
    return (
        <div className='w-50 d-block text-center mx-auto mt-5'>
            <button onClick={() => signInWithGoogle()} className='btn btn-primary'>
            <i class="fa fa-google"></i>
            <span className='p-2'>Login With Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;