import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import styled from 'styled-components';

// const Layout = () => {
//   return (
//     <>
//       <Header />
//       <Sidebar />
//       <Dashboard />
//     </>
//   );
// };

const pagePath = '/react_dashboard';

const router = createBrowserRouter([
  {
    path: `${pagePath}/`,
    element: <Home />,
    // children: [
    //   {
    //     path: `${pagePath}/`,
    //     element: <Home />,
    //   }
    // ]
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
