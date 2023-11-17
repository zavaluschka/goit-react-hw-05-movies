import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Cast } from './Cast/Cast';
import { Regard } from './Regard/Regard';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const MovieSearch = lazy(() => import('../pages/MovieSearch'));
const Movies = lazy(() => import('../pages/Movies'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MovieSearch />} />
        <Route path="movies/:movieId" element={<Movies />}>
          <Route path="cast" element={<Cast />} />
          <Route path="regard" element={<Regard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};