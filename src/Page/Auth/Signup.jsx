// import React, { useState } from "react";
// import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { register } from "../../State/AuthSlice";

// const Signup = ({ togglePanel }) => {
//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const [errors, setErrors] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });


//     let errorText = "";
//     if (name === "fullName") {
//       errorText = value === "" 
//       ? "Full Name is required"
//       : value.length < 3
//           ? "Full Name must be at least 3 characters"
//           : "";
//     } else if (name === "email") {
//       errorText =
//         value === ""
//           ? "Email is required"
//           : !/\S+@\S+\.\S+/.test(value)
//           ? "Please enter a valid email address"
//           : "";
//     } else if (name === "password") {
//       errorText =
//         value === ""
//           ? "Password is required"
//           : value.length < 5
//           ? "Password must be at least 5 characters"
//           : "";
//     }

//     setErrors({ ...errors, [name]: errorText });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     // You can use the formData state to send data to your backend or perform other actions
//     dispatch(register(formData));
//     console.log("Form Submitted", formData);
//   };

//   return (
//     <div className="">
//       <h1 className="text-lg font-bold text-center pb-4 textStyle">Signup</h1>
//       <form onSubmit={handleSubmit} className="space-y-3">
//         <TextField
//           fullWidth
//           label="Full Name"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           error={!!errors.fullName}
//           helperText={errors.fullName}
//           placeholder="Enter your full name"
//         />

//         <TextField
//           fullWidth
//           label="Email"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           error={!!errors.email}
//           helperText={errors.email}
//           placeholder="Enter your email"
//         />
//         <FormControl fullWidth>
//   <InputLabel htmlFor="role">Role</InputLabel>
//   <Select
//     label="Role"
//     name="role"
//     id="role"
//     value={formData.role}
//     onChange={handleChange}
//     error={!!errors.role}
//   >

//     <MenuItem value="ROLE_CUSTOMER">USER</MenuItem>
//     <MenuItem value="ROLE_ADMIN">ADMIN</MenuItem>
//     {/* Add more MenuItem components for other roles */}
//   </Select>
//   {errors.role && <div style={{ color: 'red' }}>{errors.role}</div>}
// </FormControl>
//         <TextField
//           fullWidth
//           label="Password"
//           name="password"
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
//           error={!!errors.password}
//           helperText={errors.password}
//           placeholder="Enter your password"
//         />

//         <div>
//           <Button
//             sx={{ padding: ".5rem 0rem" }}
//             className="customeButton"
//             variant="contained"
//             color="primary"
//             type="submit"
//             fullWidth
//           >
//             Register
//           </Button>
//         </div>
//       </form>

//       <div className="textStyle flex items-center gap-2 mt-3 justify-center">
//         <span>Already have an account ?</span>
//         <Button className="btn" onClick={togglePanel} color="primary">
//           signin
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Signup

import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useDispatch } from "react-redux";
import { register } from "../../State/AuthSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "", role: "" });
  const [errors, setErrors] = useState({ fullName: "", email: "", password: "", role: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    let errorText = "";
    if (name === "fullName") {
      errorText = value === "" ? "Full Name is required" : value.length < 3 ? "Full Name must be at least 3 characters" : "";
    } else if (name === "email") {
      errorText = value === "" ? "Email is required" : !/\S+@\S+\.\S+/.test(value) ? "Please enter a valid email address" : "";
    } else if (name === "password") {
      errorText = value === "" ? "Password is required" : value.length < 5 ? "Password must be at least 5 characters" : "";
    }
    setErrors({ ...errors, [name]: errorText });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    console.log("Form Submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      
      <TextField label="Full Name" 
      name="fullName" 
      value={formData.fullName} 
      onChange={handleChange} 
      error={!!errors.fullName} 
      helperText={errors.fullName} />


      <TextField 
      label="Email" 
      name="email" 
      value={formData.email} 
      onChange={handleChange} 
      error={!!errors.email} 
      helperText={errors.email} />

      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password} />
      <FormControl>
        <InputLabel>Role</InputLabel>
        <Select name="role" value={formData.role} onChange={handleChange} error={!!errors.role}>
          <MenuItem value="USER">USER</MenuItem>
          <MenuItem value="ADMIN">ADMIN</MenuItem>
        </Select>
        {errors.role && <div>{errors.role}</div>}
      </FormControl>
      <Button type="submit">Register</Button>
    </form>
  );
};

export default Signup;