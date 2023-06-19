import { Grid, Link } from '@mui/material'
import { Link as RouterLink} from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Grid container justifyContent='center' alignContent='center' sx={{backgroundColor:'highlights.main'}} height='15vh'> 
      <Link component={RouterLink} to='https://www.linkedin.com/in/virginia-villalobos/' underline="none" color='white'>
          <LinkedInIcon fontSize='large' />
        </Link>
        <Link component={RouterLink} to='https://github.com/vvillb/' underline="none" color='white'> 
          <GitHubIcon fontSize='large'/>
        </Link>
    </Grid>

  )
}

export default Footer
