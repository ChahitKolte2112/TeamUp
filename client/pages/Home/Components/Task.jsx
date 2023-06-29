import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

export default function Task() {
  // making task responsive
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
          width: winWidth*0.65,
          height: 40,
        },
      }}
    >
      <Paper elevation={5} >
      <Stack direction="row" spacing={2} >
      <center><code>Description</code></center>
    </Stack>
      </Paper>
    </Box>
  );
}