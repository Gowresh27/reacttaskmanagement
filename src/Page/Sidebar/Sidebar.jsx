
import { useLocation, useNavigate } from "react-router-dom";
import CreateNewTaskForm from "../Task/TaskCard/CreateTask";
import "./Sidebar.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../State/AuthSlice";
import { Button } from "@mui/material";

const menu = [
  { name: "Home", value:"HOME", role:["ROLE_ADMIN","ROLE_CUSTOMER"] },
  { name: "DONE", value:"DONE", role:["ROLE_ADMIN","ROLE_CUSTOMER"] },
  { name: "ASSIGNED", value:"ASSIGNED", role:["ROLE_ADMIN","ROLE_CUSTOMER"]},
  { name: "NOT ASSIGNED", value:"PENDING", role:["ROLE_ADMIN"]},
  { name: "Create New Task", value:"", role:["ROLE_ADMIN"] },
];

const role="ROLE_ADMIN"
const Sidebar = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {auth}=useSelector(store=>store)

  const [activeMenu, setActiveMenu] = useState("");
  const [openCreateTaskForm, setOpenCreateTaskForm] = useState(false);
    const handleCloseCreateTaskForm = () => {
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
    else if(item.name==="Home"){
      updatedParams.delete("filter")
      const queryString=updatedParams.toString();
      const updatedPath=queryString?`${location.pathname}?${queryString}`
      :location.pathname;
      navigate(updatedPath);

    }
    
    else{
      const updatedParams = new URLSearchParams(location.search);

    updatedParams.set("filter", item.value);
      navigate(`${location.pathname}?${updatedParams.toString()}`);
    }

 
    setActiveMenu(item.name);
  };
  const handleLogout = () => {
    dispatch(logout())
    console.log("handle logout")
  }

  return (
    
      
       <div className="sidebar card">
       <div className="space-y-5  h-full">
         <div className="flex justify-center">

      </div>
      
        {/* {
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
  
    <CreateNewTaskForm open={openCreateTaskForm} handleClose={handleCloseCreateTaskForm}/>
    </> */}
    {menu
          .filter(
            (item) => item.role.includes(auth.user?.role)
          )
          .map((item) => (
            <p
              onClick={() => handleMenuChange(item)}
              className={`py-3 px-5 rounded-full text-center cursor-pointer ${
                activeMenu === item.name ? "activeMenuItem" : "menuItem"
              }`}
            >
              {item.name}
            </p>
          ))}
        <Button
          variant="outlined"
          className="logoutButton"
          fullWidth
          sx={{ padding: ".8rem", borderRadius: "2rem", color: "white" }}
          onClick={handleLogout}
        >
          {"Logout"}
        </Button>
      </div>

      <CreateNewTaskForm
        open={openCreateTaskForm} handleClose={handleCloseCreateTaskForm}
      />
    </div>
  );
}
export default Sidebar

