import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  HashRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import styled from 'styled-components';

const AppBlock = styled.div`
  // app
`;

const AppContainer = styled.div`
  // app container
`;

// const pagePath = '/react_dashboard';

// const router = createBrowserRouter([
//   {
//     path: `${pagePath}/`,
//     element: <Home />,
//   },
//   {
//     path: `${pagePath}/register`,
//     element: <Register />,
//   },
//   {
//     path: `${pagePath}/login`,
//     element: <Login />,
//   },
// ]);

function App () {
  return (
    <AppBlock className='app'>
      <AppContainer className='container'>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        {/* <RouterProvider router={router} /> */}
      </AppContainer>
    </AppBlock>
  );
}

export default App;
