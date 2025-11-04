import React, { useEffect, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getUpcomingMovies()
      .then((m) => setMovies(Array.isArray(m) ? m : []))
      .catch(() => setMovies([]));
  }, []);

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      selectFavorite={() => {}}  
      action={() => <PlaylistAddIcon color="primary" />}
    />
  );
};

export default UpcomingMoviesPage;
