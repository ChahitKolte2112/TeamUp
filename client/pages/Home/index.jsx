import React from "react";
import Sidebar from "./Components/Sidebar";
import Profile from "./Components/Profile";
import ProjectPane from "./Components/ProjectPane";
import TaskPane from "./Components/TaskPane";
import TaskItem from "./Components/Task";
import "./index.css";

const Home = () => {
  return (
    <div>
      Home
      <div className="container">
        <Sidebar />
        <div className="mainFrame">
          <div className="middleFrame">
            <div className="projectpane"><ProjectPane /></div>
            <div className="taskpane"><TaskPane /></div>
          </div>
          <div className="profile">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
