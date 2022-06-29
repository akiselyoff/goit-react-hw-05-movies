import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from '../../services/fetchAPI';
import s from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(movieId).then(review => setReviews(review.results));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p className={s.authorName}>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </>
  );
};
export default Reviews;
