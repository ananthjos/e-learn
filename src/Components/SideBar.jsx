import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/sidebar.css";

const SideBar = ({ steps }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  return (
    <div>
      <nav class='sidebar'>
        <ul>
          {steps.map((step, index) => (
            <li
              key={index}
              className={index === selectedItemIndex ? "selected" : ""}
              onClick={() => setSelectedItemIndex(index)}
            >
              <Link to={`/steps/${index + 1}`} className='sidebar-link'>
                {step.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
