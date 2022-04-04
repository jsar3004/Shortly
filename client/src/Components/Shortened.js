import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { InputBase } from '@mui/material';
import { Divider } from '@mui/material';
import Link from '@mui/material/Link';
export default function Shortened({shorturl,setshorturl,longurl,setlongurl}) {
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
        value={"http://localhost:8000/"+shorturl}
      />
      <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
      <Button variant="contained" onClick={() => {navigator.clipboard.writeText("http://localhost:8000/"+shorturl)}}>Copy Url</Button>
    </Paper>
    <Typography
          component="div"
          sx={{flexGrow: 1,textAlign:'center',fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 30px auto",paddingTop:"20px"}}
          >
      Long URL: <Link href={"http://localhost:8000/"+shorturl} underline="none">
  {"http://localhost:8000/"+shorturl}
</Link>
          </Typography>  
          <Typography
          component="div"
          sx={{flexGrow: 1,textAlign:'center',fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 30px auto"}}
          >
             <Link href="/count" underline="none">
         Track the total of clicks in real-time from your shortened URL.
         </Link>
          </Typography> 
          <Typography
          component="div"
          sx={{flexGrow: 1,textAlign:'center',fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 70px auto"}}
          >
             <Link href="/" underline="none">
         Create other shortened URL.
         </Link>
          </Typography> 
      </Box>
   
      </Container>
    </React.Fragment>
  );
}
