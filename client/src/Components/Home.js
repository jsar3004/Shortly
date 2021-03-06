import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { InputBase } from '@mui/material';
import { Divider } from '@mui/material';
import Ui from './Homeui';
import { useState } from 'react';
import NestedGrid from './Grid';
import { useNavigate } from 'react-router-dom';

export default function SimpleContainer({shorturl,setshorturl,longurl,setlongurl}) {
  const navigate = useNavigate();
  const[url,seturl]=useState("");
  const Seturl=(e)=>{
      seturl(e.target.value);
  }
  const createurl = async(e) => {
    
    e.preventDefault();
     //console.log("Pressed");
    const res=await fetch("/createurl",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
         url
        })
    });
    if(res.status===204)
   {
    navigate("/error")
   }
   if(res.status===201||res.status===200)
   {
    const data=await res.json();
    setshorturl(data[0].short);
    setlongurl(data[0].full);
    navigate("/shortener")
    //  console.log(shorturl);
   }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#fff',boxShadow:'0 1px 4px #ccc' ,height: 'auto',margin:"30px auto 20px auto"  }}>
          <Typography
          component="div"
          sx={{flexGrow: 1,textAlign:'center',fontSize:'36px',fontWeight:'bold',fontFamily:'asap,arial',color:'#505050',margin:"10px auto 30px auto",paddingTop:"20px"}}
          >
           Paste the URL to be shortened
          </Typography>  
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      <InputBase
        sx={{borderWidth:'2px',borderStyle:'thin', ml: 1, flex: 1,width:'80%' }}
        placeholder="Paste Link Here"
        inputProps={{ 'aria-label': 'Paste Link Here' }}
        id="outlined-required"
        value={url}
        onChange={(e)=>Seturl(e)}
      />
      <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
      <Button variant="contained" onClick={createurl}>Shorten Url</Button>
    </Paper>
    <Typography
          component="div"
          sx={{flexGrow: 1,textAlign:'center',fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 30px auto",paddingTop:"20px"}}
          >
         Shortly is a free tool to shorten a URL or reduce a link
          </Typography>  
          <Typography
          component="div"
          sx={{flexGrow: 1,textAlign:'center',fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 70px auto",paddingBottom:"20px"}}
          >
         Use our URL Shortener to create a shortened link making it easy to remember
          </Typography> 
      </Box>
      <Ui/>
      <NestedGrid/>
      </Container>
    
    </React.Fragment>
  );
}
