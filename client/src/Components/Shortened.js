import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { InputBase } from '@mui/material';
import { Divider } from '@mui/material';
export default function Shortened() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#fff',boxShadow:'0 1px 4px #ccc' ,height: 'auto',margin:"30px auto 20px auto"  }}>
          <Typography
          component="div"
          sx={{flexGrow: 1,textAlign:'center',fontSize:'36px',fontWeight:'bold',fontFamily:'asap,arial',color:'#505050',margin:"10px auto 30px auto",paddingTop:"20px"}}
          >
          Your shortened URL
          </Typography>  
          <Typography
          component="div"
          sx={{flexGrow: 1,textAlign:'center',fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 70px auto",paddingBottom:"20px"}}
          >
         Use our URL Shortener to create a shortened link making it easy to remember
          </Typography> 
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth:"100%" }}
    >
      <InputBase
        sx={{borderWidth:'2px',borderStyle:'thin', ml: 1, flex: 1 }}
        placeholder="Paste Link Here"
        inputProps={{ 'aria-label': 'Paste Link Here' }}
        id="outlined-required"
      />
      <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
      <Button variant="contained">Copy Url</Button>
    </Paper>
    <Typography
          component="div"
          sx={{flexGrow: 1,textAlign:'center',fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 30px auto",paddingTop:"20px"}}
          >
      Long URL:  
          </Typography>  
          <Typography
          component="div"
          sx={{flexGrow: 1,textAlign:'center',fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 30px auto"}}
          >
         Track the total of clicks in real-time from your shortened URL.
          </Typography> 
          <Typography
          component="div"
          sx={{flexGrow: 1,textAlign:'center',fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 70px auto"}}
          >
         Create other shortened URL.
          </Typography> 
      </Box>
   
      </Container>
    </React.Fragment>
  );
}
