import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout';
import AboutBreed from './pages/AboutBreed';
import Home from './pages/Home';
import MostSearched from './pages/MostSearched';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'breed/:id',
          element: <AboutBreed />
        },
        {
          path: 'top-searched',
          element: <MostSearched />
        }
      ]
    },
    {
      path: '*',
      element: <h1>Not found 404!</h1>
    }
  ]);

  return <RouterProvider router={router} />
}