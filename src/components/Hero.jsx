import { Card, CardMedia, Grid, Typography } from '@mui/material'
import profilePic from '../assets/photoVir.jpg'
const Hero = () => {
  return (
    <Grid container id='hero' alignItems='center' spacing={5} padding='5%'>
      <Grid item xs={12} sm={4}>
        <Typography variant='h2'>
          Hello! I´m Vir
        </Typography>
        <Typography variant='h4'>
          Engineer|Web developer
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
      <Card sx={{  backgroundColor:'transparent',display:'contents',alignItems:'center', maxHeight:'100%',margin: 'auto',minHeight:'100%',padding:'2%'}}>
          <CardMedia
            component="img"
            loading="lazy" 
            image={profilePic}
            alt="virginia"
            sx={{  }}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant='body1'>
        Industrial Engineer with a Master&apos;s degree in Project Management. Specializing in Front End Web Development with React JS. I am curious, self-motivated, and ready for new challenges!
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Hero
