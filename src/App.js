import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import Homepage from './page/Homepage/Homepage';
import AppLayout from './layout/AppLayout';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';
import MoviesPage from './page/Movies/MoviesPage';
import TvShows from './page/TvShows/TvShows';

// 1. navbar  --> AppLayout으로 세팅
// 2. 유저는 메인 배너를 볼 수 있다 (인기순위에서 탑1 노출시키기)

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/tvprograms' element={<TvShows />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
