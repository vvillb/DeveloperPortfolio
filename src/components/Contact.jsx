import { Grid, Link, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'

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
           <Typography variant='h3' textAlign='center'>
              email me
          </Typography>
        </Link>
      
      </Grid>
      
      
    </Grid>
  )
}

export default Contact
