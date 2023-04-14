import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import StepContext from "../Context/step-context";
import SideBar from "./SideBar";
import "../Styles/sidebar.css";

const Steps = () => {
  const steps = useContext(StepContext);
  return (
    <div>
      <>
        <h1>Course Steps</h1>
        <SideBar steps={steps} />
      </>
      <Outlet />
    </div>
  );
};

export default Steps;
