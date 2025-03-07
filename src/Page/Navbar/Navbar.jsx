// import React from 'react';
// import "./Navbar.css";
// import { Avatar } from '@mui/material';


// const Navbar = () => {
//   return (
//     <div className="container-fluid navbar-custom position-sticky top-0 py-3 px-3 px-lg-5 d-flex justify-content-between align-items-center" style={{ zIndex: 10 }}>
//       <p className="font-bold text-lg">JET Task Manager</p>
//       <div className="flex items-center gap-5">
//         <p>tasks</p>
//         <Avatar>G</Avatar>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React from 'react';
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../Auth/Auth';

const Navbar = () => {
  const dispatch=useDispatch()

  const{task,auth}=useSelector(store=>store)

  return (
    <div className="container-fluid navbar-custom position-sticky top-0 py-3 px-3 px-lg-5 d-flex justify-content-between align-items-center" style={{ zIndex: 10 }}>
      <p className="font-weight-bold h4">JET Task Manager</p>
      <div className="d-flex align-items-center gap-3">
        <p className="font-weight-semibold h5">{auth.user.fullName}</p>
        <div className="rounded-circle text-white d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px', backgroundColor: '#c24dd0' }}>
        <img src="https://tse2.mm.bing.net/th/id/OIP.U1FcsQimhEwceLMAYGs_TQHaHa?rs=1&pid=ImgDetMain" alt="tag" className="img-fluid rounded-circle" style={{ width: '40px', height: '40px' }} />

        </div>
      </div>
    </div>
  );
}

export default Navbar;