import React from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const About = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Card className='mx-auto mt-5' style={{ width: '25%' }}>
  <Card.Img variant="top" src={user?.photoURL} />
  <Card.Body>
    <Card.Title>{user?.displayName}</Card.Title>
    <Card.Title>Email :{user?.email}</Card.Title>
    
    
  </Card.Body>
</Card>
        </div>
    );
};

export default About;