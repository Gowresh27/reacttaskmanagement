import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../State/AuthSlice';
import { register } from '../../State/AuthSlice';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Signup = ({togglePanel}) => {
  const dispatch=useDispatch()

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        role: ""
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:9740/auth/signup',formData);
          console.log("it is calling")
          console.log(response.data);
          Navigate('/signup')
 
          // Handle successful signup (e.g., redirect to login page)
        } catch (error) {
          console.error('There was an error signing up!', error);
          // Handle error (e.g., show error message)
        }
      };
  return (
    <div className="">
      <h1 className="text-lg font-bold text-center pb-8 textStyle">Register</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>

        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />


        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.role}
          label="Role"
          name="role"
          onChange={handleChange}
        >
          <MenuItem value={"ROLE_CUSTOMER"}>USER</MenuItem>
          <MenuItem value={"ROLE_ADMIN"}>ADMIN</MenuItem>
        </Select>
      </FormControl>

        <div>
          <Button
            sx={{ padding: ".9rem" }}
            className="customeButton"
            // variant="contained"
            // color="primary"
            type="submit"
            fullWidth
          >
            Register
          </Button>
        </div>
      </form>
      <div>
      {/* <div className="textStyle mt-5 flex items-center gap-2 py-5 justify-center"> */}
        <span>Already have an account?</span>
        <Button onClick={togglePanel}>
          signin
        </Button>
      </div>
      </div>

  )

}

export default Signup
