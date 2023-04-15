import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { stepContext } from "../context";
import SideBar from "./SideBar";
import "../styles/sidebar.css";

const Steps = () => {
  const { allSteps } = useContext(stepContext);
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
