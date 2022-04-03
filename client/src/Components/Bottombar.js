import * as React from 'react';
import "./Bottombar.css";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor:'black',
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      minHeight: 128,
    },
  }));
export default function Bottombar(){
  const navigate = useNavigate();
    return(
        <>
           <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
        <Container maxWidth="md">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 ,textAlign:'center' }}
          >
           © 2022 Shortly - Tool to shorten a long link.
           </Typography>
           <div className='table'>
           <ul className='List'>
  <li className='links'><Button onClick={()=>navigate("/")}>Shortly</Button></li>
  <li className='links'><Button onClick={()=>navigate("/totalclicks")}>Url Click Counter</Button></li>
  <li className='links'><Button onClick={()=>navigate("/")}>Terms of Service</Button></li>
  <li className='links'><Button onClick={()=>navigate("/")}>Contact</Button></li>
  <li className='links'><Button onClick={()=>navigate("/")}>Privacy</Button></li>
          </ul>
          </div>
           </Container>
</StyledToolbar>
      </AppBar>
    </Box>
        </>
    )
}