import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
export default function Count(){
    return(
        <>
         <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#fff' ,height: 'auto',margin:"30px auto 20px auto"  }}>
        <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'36px',fontWeight:'bold',fontFamily:'asap,arial',color:'#505050',margin:"10px auto 30px auto",paddingTop:"20px"}}
          >
          Total URL Clicks
          </Typography>
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 0 auto"}}
          >
         The total number of clicks that your link has received so far.
          </Typography>
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'8em',fontWeight:'bold',fontFamily:'asap,arial',color:'#505050',margin:"10px auto 30px auto"}}
          >
          0
          </Typography>
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 0 auto"}}
          >
          Our tool will count each click as one hit to the long URL, even if there are multiple clicks from the same person or device. Check the total number of clicks from other URL.
          </Typography>
          <Button variant="contained" sx={{mt:3,mb:5.8,p:3}}>Create other Shortened url</Button>
        </Box>
        </Container>
        </>
    );
}