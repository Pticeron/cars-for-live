import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Loader from './Loader/Loader';
import { useGetCarsQuery } from 'redux/usersSlice';

// const About = lazy(() => import("../pages/About/About"));
const Home = lazy(() => import('../pages/Home/Home'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
// const Limitation = lazy(() => import('./services/Limitation'));
// const Payment = lazy(() => import('./services/Payment'));
// const Documents = lazy(() => import('./services/Documents'));

export const App = () => {
  const { data } = useGetCarsQuery();
  if (!data) return;
  return (
    <>
      <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home data={data}  />} />
            <Route path="/catalog" element={<Catalog data={data} />} />
            <Route path="/favorites" element={<Favorites data={data}  />} />
          </Route>
          <Route path="*" element={<Suspense fallback={<Loader />}><NotFoundPage /></Suspense>} />

      </Routes>
        </>
  );
};
