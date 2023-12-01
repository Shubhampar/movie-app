import { Box, Text, Image } from '@chakra-ui/react';

const MovieCard = ({ movie }) => {
  if (!movie) {
    return null;
  }

  return (
    <Box p={4}>
      <Text fontSize="xl">{movie.title}</Text>
      <Image src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} mt={4} />
      <Text mt={2}>Release Date: {movie.release_date}</Text>
      <Text mt={2}>Overview: {movie.overview}</Text>
      {/* Display other movie details as needed */}
    </Box>
  );
};

export default MovieCard;
