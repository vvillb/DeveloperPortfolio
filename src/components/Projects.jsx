import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import virbakes from '../assets/virbakes.jpg'
import dietsApp from '../assets/dietApp.jpg'
import sede from '../assets/sede.png'
import portfolio from '../assets/portfolio.jpg'



const Projects = () => {



  return (
    <Grid container id='sampleProjects'alignItems='center' spacing={5} padding='5%'>
      <Grid item xs={12}> 
        <Typography variant='h3'>
        Here are some example projects for you to check out
        </Typography>
      </Grid>


      <Grid item xs={12} md={3} > 
        <Card sx={{height:'50vh'}}> 
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
            An online platform for a dessert business featuring a variety of mouthwatering recipes and delightful treats. Explore our collection of desserts and get inspired to create your own delicious creations.
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
        <Card sx={{height:'50vh'}} >
          <CardMedia
          
              component="img"
              loading="lazy" 
              image={dietsApp}
              alt="An image"/>
          <CardContent>
            <Typography variant='h5'>
              diets app
            </Typography>
            <Typography variant='body1'>
            A macro calculator app that uses a heuristic algorithm to calculate personalized food amounts based on daily needs, combining Python for calculations and Pyodide for React integration.            </Typography>
          </CardContent>
          <CardActions>
            <Link component={RouterLink} to='https://virbakes.netlify.app/'>
              <Button>
                view deployment
              </Button>
            </Link>
            <Link component={RouterLink} to='https://github.com/vvillb/Diets/tree/WithMacroDistribution'>
              <Button>
                view code on github
              </Button>
            </Link>
          </CardActions>
        </Card>  
      </Grid>

      <Grid item xs={12} md={3}> 
        <Card sx={{height:'50vh'}}>
          <CardMedia
              component="img"
              loading="lazy" 
              image={sede}
              alt="An image"/>
          <CardContent>
            <Typography variant='h5'>
              sede electrónica
            </Typography>
            <Typography variant='body1'>
            An internship project that implements a prototype/mock-up of an electronic site using React. It communicates with a backend via Axios, incorporates Redux for state management, and utilizes DevExtreme and other libraries for enhanced functionality.
            </Typography>
          </CardContent>
          <CardActions>
            <Link component={RouterLink} to='https://github.com/vvillb/SedeElectronica/tree/main/web'>
              <Button>
                view code on github
              </Button>
            </Link>
          </CardActions>
        </Card>  
      </Grid>

      <Grid item xs={12} md={3}> 
        <Card sx={{height:'50vh'}}>
          <CardMedia
              component="img"
              loading="lazy" 
              image={portfolio}
              alt="An image"/>
          <CardContent>
            <Typography variant='h5'>
              model portfolio
            </Typography>
            <Typography variant='body1'>
            A personal modeling portfolio showcasing my work, built with React and Material UI.
            </Typography>
          </CardContent>
          <CardActions>
            <Link component={RouterLink} to='https://vvillb.netlify.app/'>
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
