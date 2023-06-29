import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Task from './Task';
import Checkbox from '@mui/material/Checkbox';
import './TaskPane.css';

function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
export default function TaskPane() {
  // making taskpane responsive
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
          width: winWidth*0.77,
          height: winHeight*0.637,
        },
      }}
    >
      <Paper elevation={5} >
      <Stack direction="column" spacing={1} >
      <center><code>Task-pane</code></center>
      <br />
      {/* <Task className="task"></Task>  
      <Task className="task"></Task>  
      <Task className="task"></Task>   */}
      <div className="task">
        <ControlledCheckbox/>
        <Task/>
        <Button variant="contained" >Submit</Button>
      </div>
      <div className="task">
        <ControlledCheckbox/>
        <Task/>
        <Button variant="contained" >Submit</Button>
      </div>
      <div className="task">
        <ControlledCheckbox/>
        <Task/>
        <Button variant="contained" >Submit</Button>
      </div>
      

    </Stack>
      </Paper>
    </Box>
  );
}