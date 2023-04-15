import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import { stepContext } from "../context";

const SideBar = ({ steps }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const { selectedStep } = useContext(stepContext);

  const [currentStep, setCurrentStep] = selectedStep;

  const handleCurrentStep = (index) => {
    setSelectedItemIndex(index);
    setCurrentStep(steps[index]);
  };
  return (
    <div>
      <nav class='sidebar'>
        <ul>
          {steps &&
            steps.map((step, index) => (
              <li
                key={index}
                className={index === selectedItemIndex ? "selected" : ""}
                onClick={() => handleCurrentStep(index)}
              >
                <Link to={`/React/steps/${index + 1}`} className='sidebar-link'>
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
