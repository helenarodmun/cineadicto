import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import requests from "../Request";
import buttonClickAudio from "../audio/button-click.mp3";

const Banner = () => {
  const audioRef = useRef();
 
  const [movie, setMovie] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      const request =  await axios.get(requests.fetchCineAdictoOriginals);
      //tenemos un array de peliculas en request.data.results
      //generamos un numero random entre 0 y la longitud del array, para obtener un indice aleatorio
      const random = Math.floor(Math.random()*request.data.results.length -1);
      //mostramos en pantalla request.data.results[random]
      setMovie(request.data.results[random]);
      return request;
    }
    fetchData()
  },[]);
  const handlePlay = () => {
    audioRef.current.play();
  }
  const handlePause = () => {
    audioRef.current.pause();
  }
console.log(movie)
  return (
    
    <div className="banner" style= {{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie?.backdrop_path})`}}>
      <div className="banner-content">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner-button">
          <Button variant="outline-light" onClick={handlePlay}>Reproducir música</Button>
          <Button variant="outline-light" onClick={handlePause}>Parar la música</Button>
        </div>
        <div>
          <h2 className="description" >
            Resúmen de la película: <br></br>{(movie?.overview)}
          </h2>
        </div>
        <div className="fadeBottom"></div>
      </div>
      <audio ref={audioRef} src={buttonClickAudio}><p>Un poco de música</p></audio>
    </div>
  );
};
export default Banner;
