import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home"));
const Catalog = lazy(() => import("../pages/Catalog"));
const Mission = lazy(() => import("./services/Mission"));
const Team = lazy(() => import("./services/Teame"));
const Reviews = lazy(() => import("./services/Rewievs"));


export const App = () => {
 return(
    <>
        <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} >
        <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </>
 )
};
