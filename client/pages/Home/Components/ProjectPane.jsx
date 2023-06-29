import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

function Project() {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 160,
          height: 160,
        },
      }}
    >
      <Paper elevation={5} >
      <Stack direction="row" spacing={1} >
      <center><code>Team-Name</code></center>
    </Stack>
      </Paper>
    </Box>
  );
}

const ProjectPane = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3 // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2 // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1 // optional, default to 1.
  //   }
  // };
  return (<div>
    <center><code>Project-Pane</code></center>
    <Carousel responsive={responsive}>
    {/* <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  > */}
  {/* <div>Project 1</div> */}
  {/* <div>Project 2</div> */}
  {/* <div>Project 3</div> */}
  {/* <div>Project 4</div> */}
  <Project id='1'/>
  <Project id='2'/>
  <Project id='3'/>
  <Project id='4'/>
  <Project id='5'/>
  <Project id='6'/>
  </Carousel>
  </div>
  );
}

export default ProjectPane;


