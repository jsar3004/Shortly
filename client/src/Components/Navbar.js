import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom';
import { Link } from "react-router-dom";
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

export default function NavBar() {
  const navigate = useNavigate();
  const Nav=(e)=>{
    // console.log(e);
    try{
   navigate("/");
    }
    catch(e){console.log(e)}
  }
  return (
    <Box sx={{ flexGrow: 1  }}>
      <AppBar position="static">
        <StyledToolbar>
          <Button
         
            component="div"
            sx={{ flexGrow: 1 ,alignSelf: 'center',textAlign:'center',fontSize:"5em"}}
            onClick={Nav}
       >
            Shortly
          </Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
