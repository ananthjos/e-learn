import React from "react";
import "../Styles/about.css";

function About() {
  return (
    <div className='container'>
      <h2>About</h2>
      <p>Contact us at:</p>
      <ul>
        <li>Email: contact@example.com</li>
        <li>Phone: 555-1234</li>
        <li>Address: 123 Main St, Anytown, USA</li>
      </ul>
    </div>
  );
}

export default About;
