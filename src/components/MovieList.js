import { useState, useEffect } from 'react';
import { Input, List, ListItem, Text, Box, Select, Flex,Image} from '@chakra-ui/react';
import { getMovies } from './api';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (searchTerm || selectedGenre || selectedYear) {
      getMovies(searchTerm, sortBy, selectedGenre, selectedYear).then((data) => {
        setMovies(data);
      });
    }
  }, [searchTerm, sortBy, selectedGenre, selectedYear]);

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleGenreChange = (value) => {
    setSelectedGenre(value);
  };

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <Box p={4}>
      <Input
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
      />
      <Select value={sortBy} onChange={(e) => handleSortChange(e.target.value)} mb={4}>
  <option value="popularity.desc">Popularity Descending</option>
  <option value="popularity.asc">Popularity Ascending</option>
  <option value="release_date.desc">Release Date Descending</option>
  <option value="release_date.asc">Release Date Ascending</option>
  <option value="vote_average.desc">Rating Descending</option>
  <option value="vote_average.asc">Rating Ascending</option>
</Select>

<Select value={selectedGenre} onChange={(e) => handleGenreChange(e.target.value)} mb={4}>
  <option value="28">Action</option>
  <option value="35">Comedy</option>
  <option value="18">Drama</option>
  {/* Add more genre options */}
</Select>

<Select value={selectedYear} onChange={(e) => handleYearChange(e.target.value)} mb={4}>
  <option value="2023">2023</option>
  <option value="2022">2022</option>
  <option value="2021">2021</option>
  {/* Add more release year options */}
</Select>

<List spacing={3}>
        {movies.map((movie) => (
          <ListItem key={movie.id} onClick={() => handleMovieClick(movie)}>
            <Flex alignItems="center">
              <Link to={`/movies/${movie.id}}`}>
              <Image src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} boxSize="50px" objectFit="cover" mr={4} />
              <Text>{movie.title}</Text>
              </Link>
            </Flex>
          </ListItem>
        ))}
      </List>
      {selectedMovie && <MovieCard movie={selectedMovie} />}
    </Box>
  );
};

export default MovieList;
