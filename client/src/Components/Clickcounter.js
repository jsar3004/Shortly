import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { InputBase } from '@mui/material';
import { Divider } from '@mui/material';
export default function ClickCount(){
    return(
        <>
           <CssBaseline />
      <Container maxWidth="md">
        
        <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'36px',fontWeight:'bold',fontFamily:'asap,arial',color:'#505050',margin:"10px auto 30px auto",paddingTop:"20px"}}
          >
          URL Click Counter
          </Typography>
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 0 auto"}}
          >
         Enter the URL to find out how many clicks it has received so far.
          </Typography>
          <Box sx={{ bgcolor: '#fff',boxShadow:'0 1px 4px #ccc',height: 'auto',margin:"50px auto 20px auto"  }}>
          <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      <InputBase
        sx={{borderWidth:'2px',borderStyle:'thin', ml: 1, flex: 1,width:'80%' }}
        placeholder="Paste Link Here"
        inputProps={{ 'aria-label': 'Paste Link Here' }}
        id="outlined-required"
      />
      <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
      <Button variant="contained">Track Clicks</Button>
    </Paper>
                </Box>
                <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"50px auto 0 auto"}}
          >
         Example: shortly.at/AbCdE
          </Typography>
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 50px auto",paddingBottom:"133px"}}
          >
        * Track the total hits of the shortened URL in real time, you do not have to register.
          </Typography>
         </Container>
        </>
    );}