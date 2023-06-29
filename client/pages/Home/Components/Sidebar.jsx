import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Sidebar.css';
export default function Sidebar() {
// making sidebar responsive
const [winWidth, setWidth] = useState(window.innerWidth);
const [winHeight, setHeight] = useState(window.innerHeight);

useEffect(() => {
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
    <Box 
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: winWidth*0.15,
          height: winHeight*0.90,
        },
      }}
    >
      <Paper elevation={3} >
      <Stack direction="column" spacing={2} >
      <center><code>Sidebar</code></center>
      {/* <div className="sidebtngrp"> */}
      <div className="sidebuttons" >
      <Button variant="contained" >Create Team</Button>
      </div>
      <div className="sidebuttons" >
      <Button variant="contained" >Assign Task</Button>
      </div>
      {/* </div> */}
      {/* <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button> */}
    </Stack>
      </Paper>
    </Box>
  );
}