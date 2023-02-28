import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerId, setTrailerId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const base_url = "https://image.tmdb.org/t/p/w500";
  const youtubeApiKey = "AIzaSyA4yO7g_-Grye1oksqmGFEvXBVf8fj4AAc";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  const openModal = async (movie) => {
    // Buscar el trailer en Youtube
    const searchResult = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
        movie.title + " trailer"
      )}&key=${youtubeApiKey}`
    );
    if (searchResult.data.items.length > 0) {
      // Si se encuentra un video, establecer el ID del video en el estado
      setTrailerId(searchResult.data.items[0].id.videoId);
      setModalIsOpen(true);
    } else {
      // Si no se encuentra ningún video, mostrar un mensaje en un modal
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setTrailerId(null);
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row-container">
      <h3>{title}</h3>
      <div className="posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div
                key={movie.id}
                className="poster-container"
                onClick={() => openModal(movie)}
              >
                <img
                  className={`poster ${isLargeRow ? "posterLarge" : ""}`}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie?.overview.slice(0, 50)}
                />
                <div className="poster-title">
                  {movie?.name || movie?.title}
                </div>
              </div>
            )
        )}
      </div>
      {/* Modal para mostrar el trailer */}
<Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='Modal'>
  {trailerId ? (
    <div className='Modal__Body'>
      <YouTube videoId={trailerId} opts={opts} className='Modal__Video' />
      <button onClick={closeModal} className='Modal__Close'>Cerrar</button>
    </div>
  ) : (
    <div className='Modal__Body'>
      <div>No se encontró ningún trailer para esta película.</div>
      <button onClick={closeModal} className='Modal__Close'>Cerrar</button>
    </div>
  )}
</Modal>
    </div>
  );
};

export default Row;
