import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <>
      <h3>Navigator</h3>
      <nav>
        <Link to="/home">Home</Link>
        &nbsp;&nbsp;
        <Link to="/contact">Contact</Link> 
        &nbsp;&nbsp;
        <Link to="/login">Login</Link> 
        &nbsp;&nbsp;
        <Link to="/signup">Signup</Link>
      </nav>
    </>
  )
}