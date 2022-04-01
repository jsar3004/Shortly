import * as React from 'react';
import './Grid.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PanToolIcon from '@mui/icons-material/PanTool';
import RecommendIcon from '@mui/icons-material/Recommend';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import Typography from '@mui/material/Typography';
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    />
  );
}

function FormRow1() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>
        <RecommendIcon className="svg_icons" />
        <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'25px',fontWeight:'bold',fontFamily:'asap,arial',color:'#505050',margin:"10px auto 30px auto"}}
          >
         Easy
          </Typography> 
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 70px auto",paddingBottom:"20px"}}
          >
           Shortly is easy and fast, enter the long link to get your shortened link
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
        <AllInclusiveIcon className="svg_icons"/>
        <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'25px',fontWeight:'bold',fontFamily:'asap,arial',color:'#505050',margin:"10px auto 30px auto"}}
          >
          Shortened
          </Typography> 
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 70px auto",paddingBottom:"20px"}}
          >
           Use any link, no matter what size, Shortly always shortens
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item><AssuredWorkloadIcon className="svg_icons"/>
        <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'25px',fontWeight:'bold',fontFamily:'asap,arial',color:'#505050',margin:"10px auto 30px auto"}}
          >
          Secure
          </Typography> 
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 70px auto",paddingBottom:"20px"}}
          >
           It is fast and secure, our service have HTTPS protocol and data encryption
          </Typography>
        </Item>
      </Grid>
    </React.Fragment>
  );
}
function FormRow2() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>
        <QueryStatsIcon className="svg_icons" />
        <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'25px',fontWeight:'bold',fontFamily:'asap,arial',color:'#505050',margin:"10px auto 30px auto"}}
          >
         Statistics
          </Typography> 
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 70px auto",paddingBottom:"20px"}}
          >
           Check the amount of clicks that your shortened url received
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
        <PanToolIcon className="svg_icons" sx={{fontSize:'medium'}}/>
        <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'25px',fontWeight:'bold',fontFamily:'asap,arial',color:'#505050',margin:"10px auto 30px auto"}}
          >
          Reliable
          </Typography> 
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 70px auto",paddingBottom:"20px"}}
          >
           All links that try to disseminate spam, viruses and malware are deleted
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item><DevicesOtherIcon className="svg_icons"/>
        <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'25px',fontWeight:'bold',fontFamily:'asap,arial',color:'#505050',margin:"10px auto 30px auto"}}
          >
          Devices
          </Typography> 
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 70px auto",paddingBottom:"20px"}}
          >
           Compatible with smartphones, tablets and desktop
          </Typography>
        </Item>
      </Grid>
    </React.Fragment>
  );
}
export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow1 />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow2 />
        </Grid>
      </Grid>
    </Box>
  );
}