import * as React from 'react';
import Typography from '@mui/material/Typography';
export default function Ui(){
    return(
        <>
            <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'30px',fontWeight:'bold',fontFamily:'asap,arial',color:'#505050',margin:"10px auto 30px auto",paddingTop:"20px"}}
          >
           Simple and fast URL shortener!
          </Typography>  
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 70px auto",paddingBottom:"20px"}}
          >
         Shortly allows to reduce long links from Instagram, Facebook, YouTube, Twitter, Linked In and top sites on the Internet, just paste the long URL and click the Shorten URL button. On the next screen, copy the shortened URL and share it on websites, chat and e-mail. After shortening the URL, check how many clicks it received.
          </Typography>
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'30px',fontWeight:'bold',fontFamily:'asap,arial',color:'#505050',margin:"10px auto 30px auto"}}
          >
           Shorten, share and track
          </Typography>  
          <Typography
          component="div"
          sx={{flexGrow: 1,fontSize:'16px',fontFamily:'"source sans pro",arial',color:'#505050',margin:"20px auto 70px auto",paddingBottom:"20px"}}
          >
        Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant messages, and other locations. Track statistics for your business and projects by monitoring the number of hits from your URL with the click counter, you do not have to register.
          </Typography>
        </>
    )
}