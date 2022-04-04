import { Route, Routes } from 'react-router-dom';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Movie from '../Pages/Movie/Movie';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/404" element={<Error />} />
    </Routes>
  );
};

export default Routers;
