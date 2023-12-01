import React, { useEffect, useState } from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { getMovies } from './api';
import { useParams } from 'react-router-dom';

const MovieCard = ({ match }) => {
  const { id } = useParams(); // Get 'id' parameter from the URL
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Fetch movie details using the movie ID from the URL params
    getMovies(id).then((data) => {
      setMovieDetails(data);
    });
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>; // Render loading state while fetching movie details
  }

  const { title, overview, poster_path } = movieDetails;

  return (
    <Box p={4}>
      <Image src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} boxSize="300px" objectFit="cover" mb={4} />
      <Text fontWeight="bold" fontSize="2xl" mb={2}>{title}</Text>
      <Text>{overview}</Text>
      {/* Render other movie details as needed */}
    </Box>
  );
};

export default MovieCard;
