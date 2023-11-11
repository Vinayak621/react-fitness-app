import React from 'react'
import {Box,Stack, Typography, Button} from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px',xs:'70px'},  ml:{sm:'50px'}}} position='relative' p='20px'>
      <Typography color="#ff3635" fontWeight="600" fontSize='20px'>Fitness Club</Typography>
      <Typography fontWeight={700} mb='23px' mt='20px' sx={{fontSize:{lg:"44px" , xs:"40px"}}}>Sweat, Smile and <br/> Repeat!</Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={3}>Checkout the most efffective exercises</Typography>
      <Button variant="contained" mb ={4} sx={{backgroundColor:"red", color:"white"}} href="#exercises" >EXPLORE EXERCISES</Button>
      <Typography fontWeight={600} color="#ff2625" fontSize='200px' sx={{opacity:0.1,display:{lg:'block', xs:'none'}}}>Exercise</Typography>
      <img  className ='hero-banner-img'src={HeroBannerImage} alt=""/>
    </Box>
  )
}

export default HeroBanner