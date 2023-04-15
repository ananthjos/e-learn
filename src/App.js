import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Steps, Step, About, Layout, Courses } from "./components";
import { stepContext } from "./context";
import { getSteps } from "./services";

import "./App.css";

const App = () => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState({});

  useEffect(() => {
    (async () => {
      let response = await getSteps();
      setSteps(response);
    })();
  }, []);

  return (
    <stepContext.Provider
      value={{
        allSteps: [steps, setSteps],
        selectedStep: [currentStep, setCurrentStep],
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Courses />} />
            <Route path=':course/steps' element={<Steps />}>
              <Route path=':stepId' element={<Step />} />
            </Route>
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </stepContext.Provider>
  );
};

export default App;
