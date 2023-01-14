// Show All News
// Home will call SingleNews
import React, { useEffect } from 'react'
import Container from '@mui/material/Container';

import SingleNews from '../components/SingleNews';
import { Header } from '../widgets/Header';
import { getNews } from '../services/api-client';
import { useState } from 'react';
import LoadingImage from '../assets/loader.gif';
const Home = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getNewsAndPrint=async ()=>{
    const response = await getNews();
    setLoading(false);
    console.log('Response is ', response.data.articles);
    setNews(response.data.articles);
  }

  useEffect(()=>{
    getNewsAndPrint();
  },[])
  const jsx = news.map((oneNews, index)=> <SingleNews key={index} single = {oneNews}/>);
  return (
    <Container >
     <Header/> 
     {isLoading?<img alt="loader" src={LoadingImage}/>:jsx}
     {}  
   
    
  </Container>
  )
}

export default Home