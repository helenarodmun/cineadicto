import React from 'react';
import  Row  from '../components/Row';
import Banner from '../components/Banner';
import  Header  from '../components/Header';
import requests from '../Request';

const Home = () => {
  return (
    <div>
       <Header/>
       <Banner/>
       <Row title='ORIGINALES DE CINEADICTO' fetchUrl={requests.fetchCineAdictoOriginals} isLargeRow/>
       <Row title='MEJOR VALORADOS' fetchUrl={requests.fetchTopRated}/>
       <Row title='PELÍCULAS DE ACCIÓN' fetchUrl={requests.fetchActionMovies}/>
       <Row title='COMEDIAS' fetchUrl={requests.fetchComedyMovies}/>
       <Row title='PELÍCULAS DE TERROR' fetchUrl={requests.fetchHorrorMovies}/>
       <Row title='PELÍCULAS ROMÁNTICAS' fetchUrl={requests.fetchRomanceMovies}/>
       <Row title='DOCUMENTALES' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default Home
