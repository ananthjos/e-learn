import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
  useParams,
} from "react-router-dom";
import Step from "./Step";
import axios from "axios";

const Steps = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    axios
      .get("/steps.json")
      .then((response) => {
        setSteps(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();
  const [stepStatus, setStepStatus] = useState(Array(steps.length).fill(false));

  const handleCompleteStep = (stepIndex, completed) => {
    const updatedStatus = [...stepStatus];
    updatedStatus[stepIndex] = completed;
    setStepStatus(updatedStatus);

    if (completed && stepIndex < steps.length - 1) {
      navigate(`/steps/${stepIndex + 2}`);
    }
  };

  const progress =
    stepStatus.filter((completed) => completed).length / steps.length;

  return (
    <div>
      <h1>Course Steps</h1>
      <nav>
        <ul>
          {steps.map((step, index) => (
            <li key={index}>
              <NavLink to={`/steps/${index + 1}`} activeClassName='active'>
                {step.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>Progress: {Math.round(progress * 100)}%</div>
      </nav>
      <Routes>
        {steps.map((step, index) => (
          <Route
            key={index}
            path={`/steps/${index + 1}`}
            element={<Step step={step} setStepStatus={handleCompleteStep} />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default Steps;
