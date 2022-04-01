import * as React from 'react';
import "./Bottombar.css";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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
  <li className='links'><a className='Link' href="#home">Shortly</a></li>
  <li className='links'><a className='Link' href="#news">Url Click Counter</a></li>
  <li className='links'><a className='Link' href="#news"> Terms of Service</a></li>
  <li className='links'><a className='Link' href="#contact">Contact</a></li>
  <li className='links'><a className='Link' href="#about">Privacy</a></li>
          </ul>
          </div>
           </Container>
</StyledToolbar>
      </AppBar>
    </Box>
        </>
    )
}