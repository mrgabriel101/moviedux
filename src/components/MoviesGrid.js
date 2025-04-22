import React, { useState, useEffect } from "react";
import "../styles.css";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const m = ["a", "b", "c"];
    setMovies(m);
  }, []);

  return <div>{movies.length}</div>;
};

export default MoviesGrid;
