import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import virbakes from '../assets/virbakes.jpg'


const Projects = () => {



  return (
    <Grid container id='sampleProjects'alignItems='center' spacing={5} padding='5%'>
      <Grid item xs={12}> 
        <Typography variant='h3'>
        Here are some example projects for you to check out
        </Typography>
      </Grid>


      <Grid item xs={12} md={3}> 
        <Card>
          <CardMedia
              component="img"
              loading="lazy" 
              image={virbakes}
              alt="An image"/>
          <CardContent>
            <Typography variant='h5'>
              virbakes
            </Typography>
            <Typography variant='body1'>
              A website for my own online desserts bussiness.
            </Typography>
          </CardContent>
          <CardActions>
            <Link component={RouterLink} to='https://virbakes.netlify.app/'>
              <Button>
                view deployment
              </Button>
            </Link>
          </CardActions>
        </Card>  
      </Grid>

      <Grid item xs={12} onMouseDown={3}> 
        <Card>
          <CardMedia
              component="img"
              loading="lazy" 
              image={virbakes}
              alt="An image"/>
          <CardContent>
            <Typography variant='h5'>
              virbakes
            </Typography>
            <Typography variant='body1'>
              A website for my own online desserts bussiness.
            </Typography>
          </CardContent>
          <CardActions>
            <Link component={RouterLink} to='https://virbakes.netlify.app/'>
              <Button>
                view deployment
              </Button>
            </Link>
          </CardActions>
        </Card>  
      </Grid>

      <Grid item xs={12} md={3}> 
        <Card>
          <CardMedia
              component="img"
              loading="lazy" 
              image={virbakes}
              alt="An image"/>
          <CardContent>
            <Typography variant='h5'>
              virbakes
            </Typography>
            <Typography variant='body1'>
              A website for my own online desserts bussiness.
            </Typography>
          </CardContent>
          <CardActions>
            <Link component={RouterLink} to='https://virbakes.netlify.app/'>
              <Button>
                view deployment
              </Button>
            </Link>
          </CardActions>
        </Card>  
      </Grid>

      <Grid item xs={12} md={3}> 
        <Card>
          <CardMedia
              component="img"
              loading="lazy" 
              image={virbakes}
              alt="An image"/>
          <CardContent>
            <Typography variant='h5'>
              virbakes
            </Typography>
            <Typography variant='body1'>
              A website for my own online desserts bussiness.
            </Typography>
          </CardContent>
          <CardActions>
            <Link component={RouterLink} to='https://virbakes.netlify.app/'>
              <Button>
                view deployment
              </Button>
            </Link>
          </CardActions>
        </Card>  
      </Grid>



    </Grid>
  )
}

export default Projects
