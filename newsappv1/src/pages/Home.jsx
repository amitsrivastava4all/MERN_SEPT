// Show All News
// Home will call SingleNews
import React from 'react'
import Container from '@mui/material/Container';

import SingleNews from '../components/SingleNews';
import { Header } from '../widgets/Header';
const Home = () => {
  return (
    <Container >
     <Header/>   
    <SingleNews/>
    
  </Container>
  )
}

export default Home