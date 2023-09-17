import { Route, Routes } from "react-router-dom";

export const App = () => {
 return(
    <>
        <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
 )
};
