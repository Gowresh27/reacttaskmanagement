import { Button, TextField } from '@mui/material';
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../State/AuthSlice';

const Signin = ({togglePanel}) => {
  const dispatch=useDispatch()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      }

        const handleSubmit = (e) => {
            e.preventDefault();
            dispatch(login(formData))
            console.log("Login Form Submitted ", formData);
          };
        
  return (
    <div className="">
      <h1 className="text-lg font-bold text-center pb-8 textStyle">Login</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
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

        <div>
          <Button
            sx={{ padding: ".9rem" }}
            className="customeButton"
            // variant="contained"
            // color="primary"
            type="submit"
            fullWidth
          >
            Login
          </Button>
        </div>
      </form>
      <div>
      {/* <div className="textStyle mt-5 flex items-center gap-2 py-5 justify-center"> */}
        <span>Don't have an account?</span>
        <Button onClick={togglePanel}>
          signup
        </Button>
      </div>
      </div>

  )

}

export default Signin
