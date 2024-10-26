import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSanjayLogin = () => {
    // Redirect to the /generate-email route when Sanjay is selected
    navigate('/generate-email');
  };

  const handleUserLogin = () => {
    // Add functionality here for normal user flow
    alert('This is the User section. You can define what happens here.');
  };

  return (
    <div>
      <h1>Welcome to Makkar Tyres</h1>
      <p>Who are you?</p>
      <button onClick={handleSanjayLogin}>Enter as Sanjay (Owner)</button>
      <button onClick={handleUserLogin}>Enter as User</button>
    </div>
  );
}

export default Home;