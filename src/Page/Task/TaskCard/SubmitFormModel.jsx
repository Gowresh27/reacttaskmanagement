import React,{ useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Autocomplete, Button, Grid, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasksById, updateTask } from '../../../State/TaskSlice';
import { useLocation } from 'react-router-dom';
import { submitTask } from '../../../State/SubmissionSlice';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '3px solid #000',
  boxShadow: 24,
  p:4,
};

export default function SubmitFormModel ({item,handleClose,open}) {
  const dispatch=useDispatch()
  const location=useLocation()
  const queryParams=new URLSearchParams(location.search);
  // const taskId=queryParams.get("taskId");
  const taskId = parseInt(queryParams.get("taskId"), 10);
  const {task}=useSelector(store=>store);
    const [formData, setFormData] = useState({
       githubLink: "",
        description: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    

      
    
      const handleSubmit = (e) => {
        if (!isNaN(taskId)) { // Ensure taskId is a valid number
          console.log("Submitting task with taskId:", taskId, "and githubLink:", formData.githubLink);
          dispatch(submitTask({ taskId, githubLink: formData.githubLink }));
          handleClose();
      } else {
       console.log ("taskId:", taskId);
      }
      }
     
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form onSubmit={handleSubmit}> 
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <TextField
                label="Github Link"
                fullWidth
                name="githubLink"
                value={formData.githubLink}
                onChange={handleChange}
                

              />
            </Grid>
    
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={5}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
          
          
            <Grid item xs={12}>

            <Button fullWidth
              className="customeButton"
              type="submit"
              sx={{padding:".9rem"}}>
                submit

              </Button>
            </Grid>
         </Grid>
         </form>
        </Box>
      </Modal>
    </div>
  );
}
