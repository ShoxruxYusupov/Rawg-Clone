import { createBrowserRouter } from 'react-router-dom';
import Best from '../../features/best/Best';
import Favorite from '../../features/favorite/Favorite';
import SelectGenre from '../../features/genres/SelectGenre';
import Home from '../../features/home/Home';
import In2022 from '../../features/in2022/In2022';
import Search from '../../features/search/Search';
import SinglePage from '../../features/singlePage/SinglePage';
import { AppLayout } from '../../layout';

export const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'best-of-the-year',
        element: <Best />
      },
      {
        path: 'popular-in-2022',
        element: <In2022 />
      },
      {
        path: 'games/:genre',
        element: <SelectGenre />
      },
      {
        path: 'my-library',
        element: <Favorite />
      },
      {
        path: 'game/:id',
        element: <SinglePage />
      },
      {
        path: 'search/:text',
        element: <Search />
      }
    ]
  }
]);
