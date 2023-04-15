import React from "react";
import "../styles/about.css";

function About() {
  return (
    <div className='card m-3'>
      <h3 className='ml-2'>About</h3>
      <p className='ml-2'>Contact us at:</p>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>Email: contact@example.com</li>
        <li className='list-group-item'>Phone: 555-1234</li>
        <li className='list-group-item'>Address: 123 Main St, Anytown, USA</li>
      </ul>
    </div>
  );
}

export default About;
