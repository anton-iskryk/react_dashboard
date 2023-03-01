import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

const pagePath = '/react_dashboard';

const router = createBrowserRouter([
  {
    path: `${pagePath}/`,
    element: <Layout />,
    children: [
      {
        path: `${pagePath}/`,
        element: <Home />,
      }
    ]
  },
  {
    path: `${pagePath}/register`,
    element: <Register />,
  },
  {
    path: `${pagePath}/login`,
    element: <Login />,
  },
]);

function App () {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
