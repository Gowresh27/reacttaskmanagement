import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Divider, ListItem, ListItemText } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline:"none",
  boxShadow: 20,
  p: 1,
};
const tasks=[1,1,1,1]
export default function UserList({handleClose,open}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{
          
        tasks.map((item,index)=>
          <>
          
        <div className="flex items-center justify-between w-full">

                <div>
                  <ListItem>
                    {/* <ListItemAvatar>
                      <Avatar
                        alt="Cindy Baker"
                        src="https://cdn.leonardo.ai/users/f6c5ad77-7098-4040-bf46-6f9b62556804/generations/c60489f0-13ac-454d-8e17-2280222f205c/variations/alchemyrefiner_alchemymagic_1_c60489f0-13ac-454d-8e17-2280222f205c_0.jpg?w=512"
                      />
                    </ListItemAvatar> */}
                    <ListItemText
                      primary={"jet task manage"}
                      secondary="@jet_task_manage"
                    />
                  </ListItem>
         </div>
         <div>
          <Button className='customeButton'>select</Button>
          </div>
          </div>
          {index!==tasks.length-1 && <Divider variant="inset"  />}

          </>
        )
        }
        </Box>
      </Modal>
    </div>
  );
}
