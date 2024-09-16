import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Error from './pages/Error'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout> <Landing /> </Layout>,
      errorElement: <Error />
    },
    {
      path: '/register',
      element: <Layout> <Register /> </Layout>,
      errorElement: <Error />
    },
    {
      path: '/login',
      element: <Layout> <Login /> </Layout>,
      errorElement: <Error />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
