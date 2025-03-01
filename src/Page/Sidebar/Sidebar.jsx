// import React from 'react'
// import "./Sidebar.css"

// const Sidebar = () => {
//   return (
//     <div className="card min-h-[85vh] flex flex-col justify-center card fixed w-[20vw]">
//     <div className="space-y-5  h-full">
//       <div className="flex justify-center">
//         </div>
//         </div>
//         </div>
//   )
// }

// export default Sidebar



import { useLocation, useNavigate } from "react-router-dom";
import CreateNewTaskForm from "../Task/TaskCard/CreateTask";
import "./Sidebar.css";
import React, { useState } from "react";

const menu = [
  { name: "Home", value:"HOME", role:["ROLE_ADMIN","ROLE_CUSTOMER"] },
  { name: "DONE", value:"DONE", role:["ROLE_ADMIN","ROLE_CUSTOMER"] },
  { name: "ASSIGNED", value:"ASSIGNED", role:["ROLE_ADMIN"] },
  { name: "NOT ASSIGNED", value:"PENDING", role:["ROLE_ADMIN"]},
  { name: "Create New Task", value:"", role:["ROLE_ADMIN"] },
  { name: "Notification", value:"NOTIFICATION", role:["ROLE_CUSTOMER"] },
];

const role="ROLE_ADMIN"
const Sidebar = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const [activeMenu, setActiveMenu] = useState("");
  const [openCreateTaskForm, setOpenCreateTaskForm] = useState(false);
    const handleCloseCreateTaskTorm = () => {
      setOpenCreateTaskForm(false);
    }
    const handleOpenCreateTaskModel = () => {
    setOpenCreateTaskForm(true);
    }
  const handleMenuChange = (item) => {
    const updatedParams=new URLSearchParams(location.search);
    if(item.name==="Create New Task"){
      handleOpenCreateTaskModel()
    }
    else if(item.name=="Home"){
      updatedParams.delete("filter")
      const queryString=updatedParams.toString();
      const updatedPath=queryString?`${location.pathname}?${queryString}`
      :location.pathname;
      navigate(updatedPath);

    }
    else{
    updatedParams.set("filter", item.value);
      navigate(`${location.pathname}?${updatedParams.toString()}`);
    }

 
    setActiveMenu(item.name);
  };
  const handleLogout = () => {
    console.log("handle logout")
  }

  return (
    // <div class="card position-fixed d-flex flex-column justify-content-center" style={{ minHeight: '85vh', width: '20vw' }}>
    //       <div className="space-y-4 h-full">

    //   <div class="d-flex justify-content-center">
       // <div className="card min-h-[85vh] flex flex-col justify-center sticky w-[20vw]">
      <>
       <div className="sidebar card">
       <div className="space-y-5  h-full">
         <div className="flex justify-center">

      </div>
      
        {
        menu.filter((item) => item.role.includes(role)).map((item) => (
            <p
              onClick={() => handleMenuChange(item)}
              className={`py-3 px-5 rounded-full text-center cursor-pointer ${
                activeMenu === item.name ? "activeMenuItem" : "menuItem"
              }`}
            >
              {item.name}
            </p>
          ))}
         <button
          className="btn btn-outline-primary w-100 logoutButton"
          style={{ padding: ".7rem", borderRadius: "2rem", color: "white" }}
          onClick={handleLogout}>Logout
        </button>
    </div>
    
    </div>
    <CreateNewTaskForm open={openCreateTaskForm} handleClose={handleCloseCreateTaskTorm}/>
    </>
  );
}

export default Sidebar;
