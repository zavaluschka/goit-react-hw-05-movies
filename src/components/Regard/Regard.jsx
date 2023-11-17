import React, { useState, useEffect } from 'react';
import { getMovieReviews } from 'Api';
import { useParams } from 'react-router-dom';
import { RegardItem } from 'components/RegardItem/RegardItem';

export const Regard = () => {
  const [reviewsData, setReviewData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await getMovieReviews(movieId);

        setReviewData(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getReviews();
    console.log(getReviews());
  }, [movieId]);

  if (!reviewsData) {
    return;
  }

  return (
    <>
      {reviewsData !== '' ? (
        <ul>
          {reviewsData.map(({ id, author, content }) => (
            <li key={id}>
              <RegardItem author={author} content={content} />
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no reviews</p>
      )}
    </>
  );
};