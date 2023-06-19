import { Grid, Link, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Grid container padding='10%' id='contact'>
      <Grid item xs={12} >
        <Typography variant='h2'>
        Want to know more?
        </Typography>
      </Grid>
      <Grid item xs={12} >
      
        <Link  component={RouterLink} to='mailto:virginiavt98@gmail.com' underline="none">
           <Typography variant='h3' textAlign='center' alignContent='center'>
              email me <EmailIcon fontSize='large'/>
          </Typography>
          
        </Link>
      
      </Grid>
      
      
    </Grid>
  )
}

export default Contact
