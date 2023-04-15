import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import StepContext from "../context/step-context";
import SideBar from "./SideBar";
import "../styles/sidebar.css";

const Steps = () => {
  const { allSteps } = useContext(StepContext);
  const [steps] = allSteps;

  return (
    <div>
      <>
        <SideBar steps={steps} />
      </>
      <Outlet />
    </div>
  );
};

export default Steps;
