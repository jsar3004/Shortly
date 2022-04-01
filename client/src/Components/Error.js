import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { InputBase } from '@mui/material';
import { Divider } from '@mui/material';

import "./error.css";
export default function Error() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#fff' ,height: 'auto',margin:"30px auto 20px auto"  }}>
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'36px',fontWeight:'bold',fontFamily:'asap,arial',color:'#505050',margin:"10px auto 30px auto",paddingTop:"20px"}}
          >
          An error occurred to generate the URL
          </Typography>  
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 20px auto"}}
          >
         The URL is not valid, make sure the URL you tried to shorten is correct.
          </Typography> 
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'18px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"0px auto 0px auto"}}
          >
         Possible errors:
          </Typography>   
      </Box>
      <ul>
  <li className='errorlist'>Check if the domain is correct</li>
  <li className='errorlist'>Check if the site is online</li>
  <li className='errorlist'>Check the length of the url is not too small</li>
  <li className='errorlist'>Check the address bars and punctuation</li>
  <li className='errorlist'>The URL may have been blocked</li>
  <li className='errorlist'>The url may have been reported</li>
  <li className='errorlist'>Make sure the url does not contain spam</li>
</ul>
<Button variant="contained" sx={{mt:3,mb:5.8,p:3}}>Go back and try again</Button>
      </Container>
    </React.Fragment>
  );
}
