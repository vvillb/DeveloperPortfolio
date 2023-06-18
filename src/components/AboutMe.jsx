import { Card, CardMedia, Grid, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import foto1 from '../assets/positano.jpg'
import foto2 from '../assets/alfajores.jpg'
import foto3 from '../assets/laptop.jpg'
import foto4 from '../assets/sevilla.jpg'
import foto5 from '../assets/menorca.jpg'
import foto6 from '../assets/LaptopMirroSelfie2.jpg'



const AboutMe = () => {
  return (
    <Grid container id='about' alignItems='center'  justifyContent='center' spacing={5} padding='5%'>
      <Grid item xs={12} md={4}>
        <Typography variant='h3'>
          About me...
        </Typography>
        <Carousel  sx={{
               
               zIndex:'0'
            }}>
                <Card sx={{   height:{xs:'60vh',lg:'65vh'}, backgroundColor:'transparent',alignItems:'center',margin: 'auto'}}>
                  <CardMedia
                  
                      component="img"
                      loading="lazy" 
                      image={foto1}
                      alt="An image"
                      height='100%'
                      width='100%'
                      />
                </Card>
                <Card sx={{   height:{xs:'60vh',lg:'65vh'}, backgroundColor:'transparent',alignItems:'center',margin: 'auto'}}>
                  <CardMedia
                  sx={{}}
                      component="img"
                      loading="lazy" 
                      image={foto2}
                      alt="An image"
                      height='100%'
                      width='100%'
                      />
                </Card>
            
                <Card sx={{  height:{xs:'60vh',lg:'65vh'}, backgroundColor:'transparent',alignItems:'center',margin: 'auto'}}>
                  <CardMedia
                      sx={{ }}

                      component="img"
                      loading="lazy" 
                      image={foto3}
                      alt="An image"
                      height='100%'
                      width='100%'
                      />
                </Card>
                <Card sx={{   height:{xs:'60vh',lg:'65vh'}, backgroundColor:'transparent',alignItems:'center',margin: 'auto'}}>
                  <CardMedia
                  sx={{}}
                      component="img"
                      loading="lazy" 
                      image={foto4}
                      alt="An image"
                      height='100%'
                      width='100%'
                      />
                </Card>
                <Card sx={{   height:{xs:'60vh',lg:'65vh'}, backgroundColor:'transparent',alignItems:'center',margin: 'auto'}}>
                  <CardMedia
                  sx={{}}
                      component="img"
                      loading="lazy" 
                      image={foto5}
                      alt="An image"
                      height='100%'
                      width='100%'
                      />
                </Card>
                <Card sx={{   height:{xs:'60vh',lg:'65vh'}, backgroundColor:'transparent',alignItems:'center',margin: 'auto'}}>
                  <CardMedia
                  sx={{}}
                      component="img"
                      loading="lazy" 
                      image={foto6}
                      alt="An image"
                      height='100%'
                      width='100%'
                      />
                </Card>
            </Carousel> 
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant='body1'>
        What sets me apart? I am a relentless problem-solver, fueled by curiosity and the drive to create meaningful impact through technology. My background in industrial engineering and project management equips me with a unique perspective - I understand the bigger picture and the intricate details.

        In my pursuit to further grow in tech, I am eager to explore new horizons, especially  opportunities that allow me to contribute to a team while also expanding my own skill set.

        In my spare time, you&apos;ll find me immersed in a new book, trying out a new baking recipe, or planning my next adventure.

        Whether it&apos;s a new project or a potential collaboration, I am always ready to chat. Feel free to get in touch!
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AboutMe
