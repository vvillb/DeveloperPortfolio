import { Accordion, AccordionDetails, AccordionSummary, Card, CardMedia, Grid,  Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import foto1 from '../assets/positano.jpg'
import foto2 from '../assets/alfajores.jpg'
import foto3 from '../assets/laptop.jpg'
import foto4 from '../assets/sevilla.jpg'
import foto5 from '../assets/menorca.jpg'
import foto6 from '../assets/LaptopMirroSelfie2.jpg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const AboutMe = () => {
  return (
    <Grid container id='about' alignItems='center'  justifyContent='center' spacing={5} padding='5%'>
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
      <Grid item xs={12} sm={8}  >
        <Typography variant='h6'  textAlign='justify' paddingBottom='10%'>
        What sets me apart? I am a relentless problem-solver, fueled by curiosity and the drive to create meaningful impact through technology. My background in industrial engineering and project management equips me with a unique perspective - I understand the bigger picture and the intricate details.
        <br/>
        In my pursuit to further grow in tech, I am eager to explore new horizons, especially  opportunities that allow me to contribute to a team while also expanding my own skill set.
        <br/>
        In my spare time, you&apos;ll find me immersed in a new book, trying out a new baking recipe, or planning my next adventure.
        <br/>
        Whether it&apos;s a new project or a potential collaboration, I am always ready to chat. Feel free to <Typography variant='h6'component='a' href='#contact' color='black' >get in touch!</Typography>
        </Typography>

      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color='white'/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{backgroundColor:'highlights.main'}}
      >
        <Typography variant='h3' color='white'>
        Education
      </Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant='h6'>
      SEPTEMBER 2023
      </Typography>
      <Typography variant='h5'>
        MASTER’S DEGREE ON INDUSTRIAL ENGINEERING, UNIVERSIDAD DE OVIEDO
      </Typography>
      
      <Typography variant='h6'>
      NOVEMBER 2021
      </Typography>
      <Typography variant='h5'>
         BACHELOR OF INDUSTRIAL ENGINEERING, UNIVERSIDAD DE OVIEDO
      </Typography>
     
      </AccordionDetails>
    </Accordion>
    <br/>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color='white'/>}
        aria-controls="panel2a-content"
        id="panel2a-header"
        sx={{backgroundColor:'highlights.main'}}
      >
        <Typography variant='h3' color='white'>
        Experience
      </Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant='h6'>
      FEBRUARY 2023 – CURRENT
      </Typography>
      <Typography variant='h5'>
      WEB DEVELOPER, FUTUVER CONSULTING S.L
      </Typography>
      <Typography variant='h6'>
      SEPTEMBER 2021 – SEPTEMBER 2022
      </Typography>
      <Typography variant='h5'>
      WAITRESS/BARTENDER, BULEVAR GIJÓN
      </Typography>
      <Typography variant='h6'>
      JULY 2019 – AUGUST 2019
      </Typography>
      <Typography variant='h5'>
      CAMP GUIDE, CHARONIETO
      </Typography>
      <Typography variant='h6'>
      MAY 2016 – AUGUST 2016
      </Typography>
      <Typography variant='h5'>
      INTERNSHIP, VINCCLER C.A.
      </Typography>
      </AccordionDetails>
    </Accordion>
    </Grid>
    </Grid>

  )
}

export default AboutMe
