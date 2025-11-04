import React, {useState, useEffect}  from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import TemplateMoviePage from "../components/templateMoviePage";
import { getMovie } from "../api/tmdb-api";

const MoviePage = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie(id).then((movie) => {
      setMovie(movie);
    });
  }, [id]);

  return (
    <>
      {movie ? (
        <>
          <TemplateMoviePage movie={movie}>
            <MovieDetails movie={movie} />
          </TemplateMoviePage>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
