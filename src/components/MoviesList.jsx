import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
