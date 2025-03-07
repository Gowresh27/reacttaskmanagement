
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../State/AuthSlice';
import { toast, ToastContainer } from 'react-toastify';

const Signin = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    let errorText = "";
    if (name === "email") {
      errorText = value === "" ? "Email is required" : !/\S+@\S+\.\S+/.test(value) ? "Please enter a valid email address" : "";
    } else if (name === "password") {
      errorText = value === "" ? "Password is required" : "";
    }
    setErrors({ ...errors, [name]: errorText });
  };

  const validateForm = () => {
    const newErrors = {
      email: formData.email === "" ? "Email is required" : !/\S+@\S+\.\S+/.test(formData.email) ? "Please enter a valid email address" : "",
      password: formData.password === "" ? "Password is required" : "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(login(formData));
    } else {
      console.log("Please fix the errors in the form");
    }
  };
 

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <Button type="submit">Login</Button>
      <ToastContainer />

    </form>
  );
};


export default Signin
