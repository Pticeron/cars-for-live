import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const About = lazy(() => import("../pages/About/About"));
const Home = lazy(() => import('../pages/Home/Home'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
// const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const Limitation = lazy(() => import('./services/Limitation'));
const Payment = lazy(() => import('./services/Payment'));
const Documents = lazy(() => import('./services/Documents'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="limitation" element={<Limitation />} />
          <Route path="payment" element={<Payment />} />
          <Route path="documents" element={<Documents />} />
        </Route>
        <Route path="catalog" element={<Catalog />} />
        </Route>
    </Routes>
  );
};
