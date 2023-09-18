import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const About = lazy(() => import("../pages/About/About"));
const Home = lazy(() => import('../pages/Home/Home'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
// const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const Mission = lazy(() => import('./services/Mission'));
const Team = lazy(() => import('./services/Teame'));
const Reviews = lazy(() => import('./services/Rewievs'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="catalog" element={<Catalog />} />
        </Route>
    </Routes>
  );
};
